const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middlewares/validation.middleware.js');
const signUpUserScheme = require('../validation-schemes/signup-user.scheme.js');

const controller = require('../controllers/users.controller');

router
    .post('/signup',validationMiddleware(signUpUserScheme), controller.signUp)
    .post('/signin', controller.signIn)

module.exports = router;