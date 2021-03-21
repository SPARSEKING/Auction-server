const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newVehicleSchema = new Schema ({
    make: {
        type: String,
    },
    model: {
        type: String,
    },
    year: {
        type: String,
    },
    miles: {
        type: String,
    },
    transmission: {
        type: String,
    },
    location: {
        type: String,
    },
    date: {
        type: String,
    },
    price: {
        type: String,
    },
    imagesSrc: {
        type: Array
    },
    userId: {
        ref: "users",
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('vehicles', newVehicleSchema);