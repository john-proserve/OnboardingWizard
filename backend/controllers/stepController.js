const Step = require('../models/Steps');
const asyncHandler = require('express-async-handler');

// Get All Steps
const getAllSteps = asyncHandler(async (req, res) => {
  const steps = await Step.find().lean();
  if (!steps?.length) {
    return res.status(400).json({ message: 'No steps found' });
  }
  res.json(steps);
});

// Get Step By ID
const getStepById = asyncHandler(async (req, res) => {
  const { step_title } = req.params;
  if (!step_title) {
    return res.status(400).json({ message: 'Step ID Required' });
  }
  const step = await Step.findOne({ step_title }).lean();
  if (!step) {
    return res.status(400).json({ message: 'Step not found' });
  }
  res.status(200).json({id: step._id, title: step.step_title, message: `ID: ${step._id} Step: ${step.step_title}` });
});

// Create Note
const createNewStep = asyncHandler(async (req, res) => {
  const { step_title } = req.body;
  if (!step_title) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const stepObject = { step_title };

  const newStep = await Step.create(stepObject);

  if (!newStep) {
    return res.status(400).json({ message: 'Invalid Step data received.' });
  }
  res.status(201).json({ message: `New Step ${newStep.step_title} created.` });
});

// Update Note
const updateStep = asyncHandler(async (req, res) => {
  const { _id, step_title } = req.body;

  if (!step_title) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const pastStep = await Step.findById(_id).exec();

  if (!pastStep) {
    return res.status(404).json({ message: 'Step not found' });
  }

  if (pastStep.step_title !== step_title) {
    pastStep.step_title = step_title;
  }

  const updatedStep = await pastStep.save();
  res.json({ message: `Step ${updatedStep._id} updated.` });
});

// Delete Note
const deleteStep = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    return res.status(400).json({ message: 'Step ID Required.' });
  }

  const step = await Step.findById(_id).exec();

  if (!step) {
    return res.status(400).json({ message: 'Step not found' });
  }

  const result = await step.deleteOne();
  const reply = `Step with ID ${result._id} deleted.`;
  res.json({ message: reply });
});

module.exports = {
  getAllSteps,
  getStepById,
  createNewStep,
  updateStep,
  deleteStep,
};
