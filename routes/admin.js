var express = require('express');
var router = express.Router();
var adminController = require('../controllers/user')


router.get('/:uid', adminController.getUser);

router.get('/', adminController.getAllUser);

router.post('/register', adminController.createUser);

router.patch('/update/:uid', adminController.updateUser) 

router.delete('/delete/:uid', adminController.deleteUser);

module.exports = router;
