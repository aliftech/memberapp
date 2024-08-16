const express = require('express');
const { validateSignup, validateSignin, validateToken } = require('../utils/middleware/validator');
const { signup, signin, refresh_token } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/signin', validateSignin, signin);
router.post('/refresh_token', validateToken, refresh_token);

module.exports = router;