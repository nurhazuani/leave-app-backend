var express = require('express');
var router = express.Router();
var leaveController = require('../controllers/leave')

router.post('/:id/leave', leaveController.addLeave);

router.get('/:id', leaveController.getUser);

router.get('/', leaveController.getAllUser);

router.post('/', leaveController.createUser);

router.patch('/:id', leaveController.updateUser) 
router.patch('/:id/leave', leaveController.updateLeave)

router.delete('/:id', leaveController.deleteUser);

module.exports = router;
