const vehicleService = require('../services/newVehicle.service');

class VehicleController {

    service = vehicleService;

    setData = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.setData(req.body, req.user._id))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }

    getAllVehicles = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.getAllVehicles())
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }

    getVehicle = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.getVehicle(req.user._id))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }

    uploadImages = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.uploadImages(req.file, req.body))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }

    removeVehicle = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.removeVehicle(req.params.id, req.user))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }

    searchData = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.searchData(req.body))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }
}

module.exports = new VehicleController();