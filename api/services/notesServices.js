const Notes = require('../models/notesModel');

const getAllNotes = () => Notes.find();
const createNotes = (data) => Notes.create(data);
const getOneNote = (id) => Notes.findById(id);
const removeNote = (id) => Notes.findByIdAndDelete(id);
const updateNote = (id, data) => Notes.findByIdAndUpdate(id, data);

module.exports = {
    getAllNotes,
    createNotes,
    getOneNote,
    removeNote,
    updateNote,
}