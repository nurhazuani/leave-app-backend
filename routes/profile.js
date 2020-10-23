var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profile')

router.post('/:id/profile', profileController.addProfile );

router.get('/:id', profileController.getProfile);

router.get('/', profileController.getAllProfile);

router.post('/', profileController.createProfile);

router.patch('/:id', profileController.updateProfile) 
// router.patch('/:id/leave', profileController.updateProfile)

module.exports = router;
