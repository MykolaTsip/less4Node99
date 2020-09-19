// const msql2 = require('mysql2');
//
// let connection  = msql2.createConnection({
//     user: 'root',
//     password: 'user',
//     host: 'localhost',
//     database: 'auto_shop'
// })
//
// module.exports = connection.promise();

const Sequelize = require('sequelize');
const fs =require('fs');
const path = require('path');

module.exports = (() => {
    let instance;

    function innitConection() {
           const  client = new Sequelize('auto_shop', 'root', 'user', {
               host: 'localhost',
               dialect: 'mysql'
           })

let models = {};

           function getModels() {
       fs.readdir(path.join(process.cwd(), 'database', 'models'), (err, files) => {
           files.forEach(file => {
                const [modelName] = file.split('.');
                models[modelName] = require(path.join(process.cwd(), 'database', 'models', modelName))
           })
       })
           }


           return {
               setModels: getModels(),
               getModel: (modelName) => models[modelName]
           }
        }




    return {
        getInstance: () => {
            if (!instance) {
                instance = innitConection()
            }
            return instance
        }

    }
})()
