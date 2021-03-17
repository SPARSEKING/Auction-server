const express = require('express');
const router = express.Router();
const authmiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload");
const controller = require('../controllers/usersProfile.controller');

router
    .get('/profile', authmiddleware, controller.getInfo)
    .put('/profile/password', authmiddleware, controller.updatePassword)
    .put('/profile', upload.single("image"), authmiddleware, controller.updateInfo)

module.exports = router;