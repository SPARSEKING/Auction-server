const express = require('express');
const router = express.Router();
const authmiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload");
const controller = require('../controllers/newVehicle.controller');

router
    .get('/myvehicle', authmiddleware, controller.getVehicle)
    .post('/newvehicle', authmiddleware, controller.setData)
    .get('/newvehicle', authmiddleware, controller.getAllVehicles)

module.exports = router;