const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const noteSchema = new mongoose.Schema({
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
    note_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    note: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        required: true,
        default: 'public'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Notes', noteSchema);