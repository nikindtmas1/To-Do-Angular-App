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

    res.json("Added Successfully");
});

router.put('/:id', async (req, res) => {
    await services.updateNote(req.params.id, {...req.body});

    res.json('Update Successfully')
})

router.delete('/:id', async (req, res) => {

    await services.removeNote(req.params.id);

    res.json("Dellete Successfully");
});

module.exports = router;