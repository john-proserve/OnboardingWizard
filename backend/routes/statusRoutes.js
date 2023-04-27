const express = require('express')
const router = express.Router()
const statusController = require('../controllers/statusController')

router.route('/')
    .get(statusController.getAllStatus)
    .post(statusController.createNewStatus)
    .patch(statusController.updateStatus)
    .delete(statusController.deleteStatus);

router.route('/:username')
    .get(statusController.getStatusById);


module.exports = router