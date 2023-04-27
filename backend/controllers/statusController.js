const Status = require('../models/Status');
const asyncHandler = require('express-async-handler');

// Get All Status
const getAllStatus = asyncHandler(async (req, res) => {
    const status = await Status.find().lean();
    if(!status?.length) {
        return res.status(400).json({ message: 'No status found' });
    }
    res.json(status);
});

// Get Status By ID
const getStatusById = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    if(!_id) {
        return res.status(400).json({ message: 'Status ID Required' });
    }
    const status = await Status.findOne({ _id }).lean();
    if(!status) {
        return res.status(400).json({ message: 'Status not found' });
    }
    res.status(200).json({message: `ID: ${status._id} Status: ${status.status_title}`});
});


// Create Status
const createNewStatus = asyncHandler(async (req, res) => {
    const { status_title } = req.body;
    if(!status_title) {
        return res.status(400).json({ message: 'All fields are required' });
    };

    const statusObject = { status_title };

    const newStatus = await Status.create(statusObject);

    if(!newStatus) {
        return res.status(400).json({ message: 'Invalid Status data received.'});
    }
    res.status(201).json({message: `New Status ${newStatus._id}, ${newStatus.status_title} created.`});
});

// Update Note
const updateStatus = asyncHandler(async (req, res) => {
    const { _id, status_title } = req.body;

    if(!_id || !status_title) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const pastStatus = await Status.findById(_id).exec();

    if(!pastStatus){
        return res.status(404).json({ message: 'Status not found' });
    }

    pastStatus.status_title = status_title;

    const updatedStatus = await pastStatus.save();
    res.json({message: `Step Status ${updatedStatus._id} updated.`});
});

// Delete Note
const deleteStatus = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    if(!_id) {
        return res.status(400).json({ message: 'Status ID Required.' });
    }

    const status = await Status.findById(_id).exec();

    if(!status){
        return res.status(400).json({ message: 'Status not found' });
    }

    const result = await status.deleteOne();
    const reply = `Step with ID ${result._id} deleted.`;
    res.json({message: reply});
});

module.exports = {
    getAllStatus,
    getStatusById,
    createNewStatus,
    updateStatus,
    deleteStatus
}