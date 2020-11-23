var express = require('express');
var router = express.Router();
var leaveController = require('../controllers/leave')

router.post('/applyleave/:uid', leaveController.addLeave);

// router.get('/:uid', leaveController.getUser);

// router.get('/', leaveController.getAllUser);

// router.post('/', leaveController.createUser);

// router.patch('/:uid', leaveController.updateUser) 
router.patch('/updateleave/:uid/:id', leaveController.updateLeave)

// router.delete('/:uid', leaveController.deleteUser);

module.exports = router;
