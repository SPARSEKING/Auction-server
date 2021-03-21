const express = require('express');
const router = express.Router();
const authmiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload");
const controller = require('../controllers/newVehicle.controller');

router
    .get('/myvehicle', authmiddleware, controller.getVehicle)
    .post('/newvehicle', authmiddleware, controller.setData)
    .get('/newvehicle', authmiddleware, controller.getAllVehicles)
    .put('/newvehicle/images', authmiddleware, upload.single("image", "id"), controller.uploadImages)
    .delete('/myvehicle/:id', authmiddleware, controller.removeVehicle)
    .post('/auctions/search', authmiddleware, controller.searchData)

module.exports = router;