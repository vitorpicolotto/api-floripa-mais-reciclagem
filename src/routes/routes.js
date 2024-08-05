const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./doc.swagger.json')
const validaToken = require('../middlewares/validaToken')
const usuariosRoutes = require('./usuarios.routes')
const LoginController = require('../controllers/LoginController')
const locaisRoutes = require('./locais.routes')
const permissoesRoutes = require('./permissoes.routes')


const routes = new Router()

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

routes.use('/usuarios', usuariosRoutes) //rota pública
routes.post('/login', LoginController.login
    /*
    #swagger.tags = ['Usuário'],
    #swagger.description = 'Endpoint para efetuar o login. Usar usuário e senha do cadastro',
        #swagger.parameters['login'] = {
            in: 'body',
            description: 'Login de usuário',
            required: true,
            schema: { 
                $email: "kratos@email.com",
                $password: "atreus123456"
            }
        }
*/
)

routes.use('/local', validaToken, locaisRoutes) //rota privada
routes.use('/permissoes', validaToken, permissoesRoutes)

module.exports = routes