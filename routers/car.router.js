const {Router} = require('express');
const carController = require('../controllers/car.controller');
const carRouter = Router();

carRouter.get('/', carController.AllCar)

module.exports = carRouter
