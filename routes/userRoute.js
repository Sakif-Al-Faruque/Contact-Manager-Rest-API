const express = require('express');
const router = express.Router();
const {registration, login} = require('../controllers/userController');

router.route('/signup').post(registration);
router.route('/signin').post(login);


module.exports = router;