const UserProfile = require('../models/UserProfile.js');
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

class UsersService {

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
                    country: updateData.country,
                    imageSrc: updateData.file ? updateData.file.path : "" }});
        return updateInfo;
    }

    updatePassword = async (newPassword, id) => {
        const salt = await bcrypt.genSalt(10);
        console.log(newPassword)
        console.log(newPassword.password)
        const updatePassword = await User.updateOne(
            {_id: id},
            {$set: {password: await bcrypt.hash(newPassword.password, salt),}});
        return updatePassword;
    }
}

module.exports = new UsersService();