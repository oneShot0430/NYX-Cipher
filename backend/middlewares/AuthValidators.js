const { body } = require('express-validator');

const userRegisterValidator = [
    // Validate email
    body('email')
        .isEmail()
        .withMessage('Please provide a valid email address'),

    // Validate password
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/\d/)
        .withMessage('Password must contain a number')
        .matches(/[A-Z]/)
        .withMessage('Password must contain an uppercase letter'),
];

module.exports = {
    userRegisterValidator,
};
