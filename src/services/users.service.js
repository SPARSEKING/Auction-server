const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys.js');
const User = require('../models/User.js');
const UserProfile = require('../models/UserProfile.js');
const NewVehicle = require('../models/NewVehicle.js');

class UserService {
    signIn = async (user) => {
        const candidate = await User.findOne({ login: user.login })
        const userLogin = candidate.login;
        if(candidate) {
            const passwordResult = await bcrypt.compare(user.password, candidate.password);
            if (passwordResult) {
                const token = jwt.sign({
                    _id: candidate._id
                }, keys.jwt, {expiresIn: 600 * 600})
                return {token, userLogin};
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
        const profile = new UserProfile({userId: user._id})
        const candidate = await User.findOne({ login: user.login, email: user.email});
        if (!candidate) {
          await user.save();
          await profile.save();
          return user;
        } else {
            throw new Error('User with this login or email already exists');
        }
    }
}

module.exports = new UserService();