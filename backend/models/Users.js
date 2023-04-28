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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Steps',
        required: false,
        default: "644ae258a8daec71c0db0ef9"
    },
    roles: [{
        type: String,
        default: 'merchant'
    }]
});

module.exports = mongoose.model('User', userSchema);