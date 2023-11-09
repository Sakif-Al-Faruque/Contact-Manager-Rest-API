const mongoose = require('mongoose');

const mongoConnection = async () => {
    try{
        const app_connection = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            `DB Host -> ${app_connection.connection.host} | DB Name -> ${app_connection.connection.name}`
        );
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = mongoConnection;