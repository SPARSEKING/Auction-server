const userService = require('../services/usersProfile.service');

class UserController {

    service = userService;

    getInfo = async (req, res) => {
        res
            .status(200)
            .json(await this.service.getInfo(req.user._id))
    }

    updateInfo = async (req, res) => {
        res 
            .status(200)
            .json(await this.service.updateInfo(req.body, req.user._id))
    }
    
    updatePassword = async (req, res) => {
        res 
            .status(200)
            .json(await this.service.updatePassword(req.body, req.user._id))
    }
}

module.exports = new UserController();