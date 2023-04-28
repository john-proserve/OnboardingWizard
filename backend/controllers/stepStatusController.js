const StepStatus = require('../models/StepStatus');
const asyncHandler = require('express-async-handler');

// Get All StepStatus
const getAllStepStatus = asyncHandler(async (req, res) => {
    const stepStatus = await StepStatus.find().lean();
    if(!stepStatus?.length) {
        return res.status(400).json({ message: 'No step status found' });
    }
    res.json(stepStatus);
});

// Get Step By ID
const getStepStatusById = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    if(!_id) {
        return res.status(400).json({ message: 'Step Status ID Required' });
    }
    const stepStatus = await StepStatus.findOne({ _id }).lean();
    if(!stepStatus) {
        return res.status(400).json({ message: 'Step Status not found' });
    }
    res.status(200).json({message: `ID: ${stepStatus._id} Step Status: ${step.status}`});
});


// Create Note
const createNewStepStatus = asyncHandler(async (req, res) => {
    const { user_id, step_id, status_id } = req.body;
    if(!user_id || !step_id || !status_id) {
        return res.status(400).json({ message: 'All fields are required' });
    };

    const stepStatusObject = { user_id, step_id, status_id };

    const newStepStatus = await StepStatus.create(stepStatusObject);

    if(!newStepStatus) {
        return res.status(400).json({ message: 'Invalid Step Status data received.'});
    }
    res.status(201).json({message: `New Step Status ${newStepStatus._id} created.`});
});

// Update Note
const updateStepStatus = asyncHandler(async (req, res) => {
    const { _id, user_id, step_id, status_id, date_started, date_completed } = req.body;

    if(!_id) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const pastStepStatus = await StepStatus.findById(_id).exec();

    if(!pastStepStatus){
        return res.status(404).json({ message: 'Step Status not found' });
    }

    if(user_id) pastStepStatus.user_id = user_id;
    if(step_id) pastStepStatus.step_id = step_id;
    if(status_id) pastStepStatus.status_id = status_id;
    if(date_started) pastStepStatus.date_started = date_started;
    if(date_completed) pastStepStatus.date_completed = date_completed;

    const updatedStepStatus = await pastStepStatus.save();
    res.json({message: `Step Status ${updatedStepStatus._id} updated.`});
});

// Delete Note
const deleteStepStatus = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    if(!_id) {
        return res.status(400).json({ message: 'Step Status ID Required.' });
    }

    const stepStatus = await StepStatus.findById(_id).exec();

    if(!stepStatus){
        return res.status(400).json({ message: 'Step Status not found' });
    }

    const result = await stepStatus.deleteOne();
    const reply = `Step with ID ${result._id} deleted.`;
    res.json({message: reply});
});

module.exports = {
    getAllStepStatus,
    getStepStatusById,
    createNewStepStatus,
    updateStepStatus,
    deleteStepStatus
}