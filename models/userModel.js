const mongoose = require('mongoose');

const managerModel = mongoose.Schema({
    email: {
        type: String,
        require: [true, "Please provide the email"]
    },
    password: {
        type: String,
        require: [true, "Please provide the passowrd"]
    }
},
{
    timestamp: true
}
);

module.exports = mongoose.model('manager', managerModel);