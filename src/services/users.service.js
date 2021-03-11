const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys.js');
const User = require('../models/User.js');

class UserService {
    signIn = async (user) => {
        const candidate = await User.findOne({ login: user.login })
        if(candidate) {
            const passwordResult = await bcrypt.compare(user.password, candidate.password);
            if (passwordResult) {
                const token = jwt.sign({
                    login: candidate.login
                }, keys.jwt, {expiresIn: 60 * 60})
                return {token, candidate};
            } else {
                return createError(404, 'Password entered incorrectly.');
            }
        } else {
            return createError(404, 'User with this login was not found.');
        }
    }

    signUp = async (newUser) => {
        const user = new User({
            login: newUser.login,
            password: newUser.password,
            email: newUser.email,
            seller: newUser.seller
        })
        await user.save();
        return user;
    }
}

module.exports = new UserService();