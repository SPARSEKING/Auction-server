const express = require('express');
const router = express.Router();
const cors = require("cors");

const controller = require('../controllers/users.controller');

router
    .post('/signup', cors(), controller.signUp)
    .post('/signin', cors(), controller.signIn)

module.exports = router;