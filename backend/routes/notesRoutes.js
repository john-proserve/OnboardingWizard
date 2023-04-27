const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')

router.route('/')
    .get(noteController.getAllNotes)
    .post(noteController.createNewNote)
    .patch(noteController.updateNote)
    .delete(noteController.deleteNote);

router.route('/:username')
    .get(noteController.getNoteById);


module.exports = router