const userService = require('../services/users.service');

class UserController {

    service = userService;

    signIn = async (req, res, next) => {
        try {
            res 
                .status(200)
                .send(await this.service.signIn(req.body))
        } catch(e) {
            next(e);
            return;
        }
    }

    signUp = async (req, res, next) => {
            res 
                .status(201)
                .json(await this.service.signUp(req.body))
    }       
}

module.exports = new UserController();