const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    step_id: {
        type: Number,
        required: true
    },
    date_started: {
        type: Date,
        required: true,
        default: Date.now
    },
    date_completed: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Steps', stepSchema);