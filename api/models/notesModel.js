const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    id: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("Notes",notesSchema);