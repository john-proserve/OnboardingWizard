const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
    step_title: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Steps', stepSchema);