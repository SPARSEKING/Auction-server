const NewVehicle = require('../models/NewVehicle');
const keys = require('../config/keys.js');

class VehicleService {

    getAllVehicles = async () => {
        return NewVehicle.find();
    }

    getVehicle = async (id) => {
        return NewVehicle.find({userId: id});
    }

    setData = async (newVehicle, id) => {
        const vehicle = new NewVehicle({
            make: newVehicle.makes,
            model: newVehicle.model,
            year: newVehicle.year,
            miles: newVehicle.miles,
            transmission: newVehicle.transmission,
            location: newVehicle.location,
            date: newVehicle.date,
            price: newVehicle.price,
            userId: id
        })
        await vehicle.save();
        return vehicle;
    }

    uploadImages = async (file, data) => {
        await NewVehicle.update(
            {_id: data.id},
            {$push: {imagesSrc: `${keys.BASE_URL}${file.filename}`}})
        return { message: `Message is saved on path ${file.filename}`}
    }

    removeVehicle = async (id, user) => {
        await NewVehicle.remove({ _id: id })
        return NewVehicle.find({ userId: user._id })
    }

    searchData = async (data) => {
        if(data.year === "") {
            return await NewVehicle.find({ make: data.make, transmission: data.transmission });
        } else if(data.transmission === "") {
            return await NewVehicle.find({ make: data.make, year: data.year });
        } else if(data.make === "") {
            return await NewVehicle.find({ year: data.year, transmission: data.transmission });
        } else {
            return await NewVehicle.find({ make: data.make, transmission: data.transmission, year: data.year});
        }
    }
}

module.exports = new VehicleService();