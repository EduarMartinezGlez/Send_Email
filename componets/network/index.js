const sendMail = require('../router')

const routes = function routes(server){
    server.use('/', sendMail)
}

 module.exports= routes