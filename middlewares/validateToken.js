const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(
            token, 
            process.env.SECRET_KEY,
            (err, decode) => {
                if(err){
                    res.status(401);
                    throw new Error(`Manager is not authrized`);
                }

                req.manager = decode.manager;
                next();
            }
        );
    }else{
        return res.status(404).json({message: "token is required."});
        next();
    }
});


module.exports = validateToken;