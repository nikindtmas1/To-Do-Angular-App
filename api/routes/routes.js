const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController');

router.use('/notes', notesController);

module.exports = router;