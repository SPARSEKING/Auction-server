const userService = require('../services/users.service');

class UserController {

    service = userService;

    signIn = async (req, res) => {
        res 
        .status(200)
        .send(await this.service.signIn(req.body))
    }

    signUp = async (req, res) => {
        res 
        .status(201)
        .json(await this.service.signUp(req.body))
    }       
}

module.exports = new UserController();