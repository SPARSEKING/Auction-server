const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema ({
    firstName: {
        type: String,
        default: ""
    },
    secondName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    phoneNumber: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    imageSrc: {
        type: String,
        default: ""
    },
    userId: {
        ref: "users",
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('usersProfile', userProfileSchema);