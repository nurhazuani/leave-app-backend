var express = require('express');
var router = express.Router();
var leaveController = require('../controllers/leave')

router.post('/:uid/leave', leaveController.addLeave);

router.get('/:uid', leaveController.getUser);

router.get('/', leaveController.getAllUser);

router.post('/', leaveController.createUser);

router.patch('/:uid', leaveController.updateUser) 
router.patch('/:uid/:id/leave', leaveController.updateLeave)

router.delete('/:uid', leaveController.deleteUser);

module.exports = router;
