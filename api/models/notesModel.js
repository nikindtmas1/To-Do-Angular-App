const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  
    description: {
        type: String
    }
});

module.exports = mongoose.model("Notes",notesSchema);