// const connection = require('../database/index');
const connection = require('../database/index').getInstance();


module.exports = {
    // AllCars: async () => {
    //     const [carss] = await connection.query('SELECT * FROM cars')
    //
    //     return carss
    // }

    AllCars: async () => {
      const car =  await  connection.getModell('Car')
        return car.findAll({})
    }


}
