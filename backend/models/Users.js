const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    currentStep: {
        type: Number,
        required: false
    },
    roles: [{
        type: String,
        default: 'merchant'
    }]
});

module.exports = mongoose.model('User', userSchema);