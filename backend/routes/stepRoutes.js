const express = require('express');
const router = express.Router();
const stepController = require('../controllers/stepController');

router
  .route('/')
  .get(stepController.getAllSteps)
  .post(stepController.createNewStep)
  .patch(stepController.updateStep)
  .delete(stepController.deleteStep);

router.route('/:step_title').get(stepController.getStepById);

module.exports = router;
