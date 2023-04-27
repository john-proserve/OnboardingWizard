const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const statusSchema = new mongoose.Schema({
    status_title: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Status', statusSchema);