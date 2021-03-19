const NewVehicle = require('../models/NewVehicle');

class UsersService {

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
        console.log(vehicle)
        await vehicle.save();
        return vehicle;
    }
}

module.exports = new UsersService();