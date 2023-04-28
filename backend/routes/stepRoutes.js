const express = require('express')
const router = express.Router()
const stepController = require('../controllers/stepController')

router.route('/')
    .get(stepController.getAllSteps)
    .post(stepController.createNewStep)
    .patch(stepController.updateStep)
    .delete(stepController.deleteStep);

router.route('/:_id')
    .get(stepController.getStepById);


module.exports = router