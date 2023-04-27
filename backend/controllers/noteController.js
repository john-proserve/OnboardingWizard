const Note = require('../models/Notes');
const asyncHandler = require('express-async-handler');

// Get All Notes
const getAllNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find().lean();
    if(!notes?.length) {
        return res.status(400).json({ message: 'No notes found' });
    }
    res.json(notes);
});

// Get Note By ID
const getNoteById = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    if(!_id) {
        return res.status(400).json({ message: 'Note ID Required' });
    }
    const note = await Note.findOne({ _id }).lean();
    if(!note) {
        return res.status(400).json({ message: 'Note not found' });
    }
    res.status(200).json({message: `ID: ${note.id} Note: ${note.note}`});
});


// Create Note
const createNewNote = asyncHandler(async (req, res) => {
    const { user_id, step_id, note, visibility } = req.body;
    if(!user_id || !step_id || !note) {
        return res.status(400).json({ message: 'All fields are required' });
    };

    const noteObject = { user_id, step_id, note };

    if(visibility)
        noteObject.visibility = visibility;

    const newNote = await Note.create(noteObject);

    if(!newNote) {
        return res.status(400).json({ message: 'Invalid Note data received.'});
    }
    res.status(201).json({message: `New Note ${newNote._id} created.`});
});

// Update Note
const updateNote = asyncHandler(async (req, res) => {
    const { _id, user, step_id, note_date, note, visibility } = req.body;

    const pastNote = await Note.findById(_id).exec();

    if(!pastNote){
        return res.status(404).json({ message: 'Note not found' });
    }

    if(user)
        pastNote.user = user;
    if(step_id)
        pastNote.step_id = step_id;
    if(note_date)
        pastNote.note_date = note_date;
    if(note)
        pastNote.note = note;
    if(visibility)
        pastNote.visibility = visibility;
        
    const updatedNote = await pastNote.save();
    res.json({message: `Note ${pastNote._id} updated.`});
});

// Delete Note
const deleteNote = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    if(!_id) {
        return res.status(400).json({ message: 'Note ID Required.' });
    }

    const note = await Note.findById(_id).exec();

    if(!note){
        return res.status(400).json({ message: 'Note not found' });
    }

    const result = await note.deleteOne();
    const reply = `Note with ID ${result._id} deleted.`;
    res.json({message: reply});
});

module.exports = {
    getAllNotes,
    getNoteById,
    createNewNote,
    updateNote,
    deleteNote
}