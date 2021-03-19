const userService = require('../services/usersProfile.service');

class UserController {

    service = userService;

    getInfo = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.getInfo(req.user._id))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }

    updateInfo = async (req, res) => {
        try {
            res 
                .status(200)
                .json(await this.service.updateInfo(req.body, req.user._id))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }
    
    updatePassword = async (req, res) => {
        try {
            res
                .status(200)
                .json(await this.service.updatePassword(req.body, req.user._id))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }

    updateProfileImage = async (req, res) => {
        try {
            res 
                .status(200)
                .json(await this.service.updateProfileImage(req.file, req.user))
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }
}

module.exports = new UserController();