const express = require('express')
const router = express.Router()
const stepStatusController = require('../controllers/stepStatusController')

router.route('/')
    .get(stepStatusController.getAllStepStatus)
    .post(stepStatusController.createNewStepStatus)
    .patch(stepStatusController.updateStepStatus)
    .delete(stepStatusController.deleteStepStatus);

router.route('/:_id')
    .get(stepStatusController.getStepStatusById);


module.exports = router