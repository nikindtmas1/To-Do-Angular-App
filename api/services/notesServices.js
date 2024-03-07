const Notes = require('../models/notesModel');

const getAllNotes = () => Notes.find();

module.exports = {
    getAllNotes,
}