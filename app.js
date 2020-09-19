const express = require('express');
const carRouter = require('./routers/car.router');
const server = express();

const instance = require('./database/index').getInstance();
instance.setModels();

server.use(express.urlencoded({extends: true}))
server.use(express.json())

server.use('/car', carRouter)




server.listen(5001, (e) => {
    if (e) {
        console.log(e)
    }
    console.log('port 5001 is work')
})
