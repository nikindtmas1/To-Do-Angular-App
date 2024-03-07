const express = require('express');
const router = express.Router();

const services = require('../services/notesServices');

router.get('/', async (req, res) => {

    const allNotes = await services.getAllNotes();

    res.json(allNotes);
});

router.get('/:id', async (req, res) => {

    const oneNote = await services.getOneNote(req.params.id);

    res.json(oneNote);
});

router.post('/', async (req, res) => {

    await services.createNotes({...req.body});

    res.json({ ok : true });
});


router.delete('/:id', async (req, res) => {

    await services.removeNote(req.params.id);

    res.json({ ok: true });
});

module.exports = router;