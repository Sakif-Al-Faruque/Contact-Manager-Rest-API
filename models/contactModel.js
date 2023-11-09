const mongoose = require('mongoose');

const contactModel = mongoose.Schema({
    name: {
        type: String,
        require: [true, `Please provide the contact name.`]
    },
    email: {
        type: String,
        require: [true, `Please provide the contact email.`]
    },
    phone: {
        type: String
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model(`contact`, contactModel);