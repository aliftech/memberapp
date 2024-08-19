const express = require('express');
const { validateSignup, validateSignin, validateToken } = require('../utils/middleware/validator');
const { signup, signin, refresh_token, google_auth, facebook_auth } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/signin', validateSignin, signin);
router.post('/refresh_token', validateToken, refresh_token);
router.post('/auth/google', google_auth);
router.post('/auth/facebook', facebook_auth);

module.exports = router;