const UserProfile = require('../models/UserProfile.js');
const User = require('../models/User.js');
const keys = require('../config/keys.js');
const bcrypt = require('bcryptjs');

class ProfileService {

    getInfo = async (id) => {
        return UserProfile.findOne({ userId: id });
    }

    updateInfo = async (updateData, id) => {
        const updateInfo = await UserProfile.updateOne(
            {userId: id},
            {$set: {firstName: updateData.firstName,
                    secondName: updateData.secondName,
                    email: updateData.email,
                    phoneNumber: updateData.phoneNumber,
                    city: updateData.city,
                    country: updateData.country,
            }});
        return updateInfo;
    }

    updateProfileImage = async (file, user) => {
        await UserProfile.updateOne(
            {userId: user._id},
            {$set: {imageSrc: `${keys.BASE_URL}${file.filename}`}})
        return { message: `${file.filename} saved`}
    }

    updatePassword = async (newPassword, id) => {
        const salt = await bcrypt.genSalt(10);
        const updatePassword = await User.updateOne(
            {_id: id},
            {$set: {password: await bcrypt.hash(newPassword.password, salt),}});
        return updatePassword;
    }
}

module.exports = new ProfileService();