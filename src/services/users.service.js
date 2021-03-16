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
                throw new Error('Password entered incorrectly.');
            }
        } else {
            throw new Error('User with this login was not found.');
        }
    }

    signUp = async (newUser) => {
        const salt = await bcrypt.genSalt(10);
        const user = new User({
            login: newUser.login,
            password: await bcrypt.hash(newUser.password, salt),
            email: newUser.email,
            seller: newUser.seller
        })
        const candidate = await User.findOne({ login: user.login, email: user.email});
        if (!candidate) {
          await user.save();
          return user;
        } else {
            throw new Error('User with this login or email already exists');
        }
    }
}

module.exports = new UserService();