const userService = require('../services/newVehicle.service');

class UserController {

    service = userService;

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
}

module.exports = new UserController();