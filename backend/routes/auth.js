const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
//------------ Importing Controllers ------------//
const AuthController = require('../controllers/authController')

//------------ Importing Validators ------------//
const AuthValidator = require('../middlewares/AuthValidators')


// router.post('/register', AuthValidator, AuthController.register);
router.post('/register', AuthValidator.userRegisterValidator, (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Return validation errors to the client
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, AuthController.register);
router.post('/login', AuthController.login);
router.get('/verify/:token', AuthController.verify);
router.post('/resend', AuthController.resend);
router.post('/forgot', AuthController.forgotPassword);

module.exports = router;