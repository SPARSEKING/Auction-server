const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');

router
    .post('/signup', controller.signUp)
    .post('/signin', controller.signIn)

module.exports = router;