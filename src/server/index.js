const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/routes')
const cors = require('./cors')
const jwtMiddleware = require("../http/jwtMiddleware")

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())

server.use(jwtMiddleware())

routes(server)

module.exports = server