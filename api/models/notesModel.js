const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  
    description: {
        type: String
    },
    checkBox: {
        type: Boolean
    }
});

module.exports = mongoose.model("Notes",notesSchema);