const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');







const getContacts =  asyncHandler(async (req, res) => {
    const contact = await Contact.find();
    res.status(200).json(contact);
});


const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
});



const createContact = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body;
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(200).json(contact);
});



const updateContact = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body;

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        return res.status(200).json({message: `No such id found for ${req.params.id}`});
    }


    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        {name, email, phone},
        {new: true}
    );

    res.status(200).json(updatedContact);
});


const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        return res.status(200).json({message: `No such id found for ${req.params.id}`});
    }


    const deletedContact = await Contact.deleteOne({ _id : req.params.id});

    res.status(200).json(deletedContact);
});









const midTestContact = (req, res) => {
    res.status(200).json({message: `${req.testedData}`});
}


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
    midTestContact
};