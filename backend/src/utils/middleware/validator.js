const { body } = require('express-validator');

const validateSignup = [
    body('firstname')
        .notEmpty().withMessage('First name is required'),
    
    body('lastname')
        .notEmpty().withMessage('Last name is required'),

    body('email')
        .isEmail().withMessage('Please provide a valid email address')
        .notEmpty().withMessage('Email is required'),
  
    body('membership_type')
        .notEmpty().withMessage('Membership type is required'),
    
    body('password')
        .notEmpty().withMessage('Password is required'),
    
    body('confirm_password')
        .notEmpty().withMessage('Confirm password is required')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error('Confirm password does not match password');
            }
            return true;
        }),
];

const validateSignin = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),
    
    body('password')
        .notEmpty().withMessage('Password is required'),
];

const validateToken = [
    body('refresh_token')
        .notEmpty().withMessage('Token is required'),
];

module.exports = {
    validateSignup,
    validateSignin,
    validateToken,
};
