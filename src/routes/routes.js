const { Router } = require('express')
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./doc.swagger.json')
const usuariosRoutes = require('./usuarios.routes')
const LoginController = require('../controllers/LoginController')



const routes = new Router()

//routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

routes.use('/usuarios', usuariosRoutes) //rota pública
routes.post('/login', LoginController.login)

module.exports = routes