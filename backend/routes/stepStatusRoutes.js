const express = require('express');
const router = express.Router();
const stepStatusController = require('../controllers/stepStatusController');

router
  .route('/')
  .get(stepStatusController.getAllStepStatus)
  .post(stepStatusController.createNewStepStatus)
  .patch(stepStatusController.updateStepStatus);

router
  .route('/:_id')
  .get(stepStatusController.getStepStatusById)
  .delete(stepStatusController.deleteStepStatus);

router.route('/user/:_id').get(stepStatusController.getStepStatusByUser);

module.exports = router;
