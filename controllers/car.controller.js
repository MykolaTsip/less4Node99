const carServise = require('../services/car.service');


module.exports = {
    AllCar: async (req, res) => {
        try {
            let cars = await carServise.AllCars()
            console.log('yes')
            res.json(cars)
        }
        catch (e) {
            res.json(e.message)
        }
    }
}
