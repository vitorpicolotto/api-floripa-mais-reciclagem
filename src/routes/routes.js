const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./doc.swagger.json')



const routes = new Router()

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = routes