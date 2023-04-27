const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    step_id: {
        type: Number,
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

notesSchema.plugin(AutoIncrement, {
    model: 'Notes',
    field: 'note_id',
    startAt: 1
});

module.exports = mongoose.model('Notes', noteSchema);