const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
    current_step: {
        type: Number,
        required: false,
        default: 0
    },
    roles: [{
        type: String,
        default: 'merchant'
    }]
});

module.exports = mongoose.model('User', userSchema);