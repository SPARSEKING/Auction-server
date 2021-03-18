const userService = require('../services/users.service');

class UserController {

    service = userService;

    signIn = async (req, res) => {
        try {
            const result = await this.service.signIn(req.body);
            res.status(201).json(result);
        } catch(e) {
            console.log(e);
            res
                .status(400)
                .send({error: e.message})
        }
    }

    signUp = async (req, res) => {
        try {
            const result = await this.service.signUp(req.body);
            res.status(201).json(result);
        } catch(e) {
            res
                .status(400)
                .send({error: e.message})
        }
    }       
}

module.exports = new UserController();