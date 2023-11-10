const Manager = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const manager = await Manager.findOne({email});
    if(!manager){
        return res.status(200).json({message: `no user is found`});
    }

    if(manager && (await bcrypt.compare(password, manager.password))){
        const accessToken = jwt.sign({
            manager: {
                email: manager.email,
                id: manager.id
            },
        },
        process.env.SECRET_KEY,
        {expiresIn: "1m"}
        );
        res.status(200).json({token: accessToken});
    }
});



const registration = asyncHandler(async (req, res) => {
    const {email, password, confirm_password} = req.body;

    const manager = await Manager.findOne({email});
    if(manager){
        return res.status(200).json({message: `${email} email already exists`});
    }

    if(password != confirm_password){
        return res.status(200).json({message: `password and confirm password must be same`});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const new_manager = await Manager.create({
        email,
        password: hashedPassword
    });
    res.status(200).json(new_manager);
});



module.exports = {registration, login};