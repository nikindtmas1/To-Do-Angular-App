const express = require('express');
const router = express.Router();

const services = require('../services/notesServices');

router.get('/', async (req, res) => {
    const allNotes = await services.getAllNotes();

    res.json(allNotes);
});

module.exports = router;