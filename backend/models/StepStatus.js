const mongoose = require('mongoose');

const stepStatusSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    step_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Steps',
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
    },
    status_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Status',
        required: true
    }
});

module.exports = mongoose.model('StepStatus', stepStatusSchema);