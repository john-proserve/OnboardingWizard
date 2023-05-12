const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createNewUser)
  .patch(userController.updateUser);

router.route('/:username').get(userController.getUserId);

router.route('/:_id').delete(userController.deleteUser);

module.exports = router;
