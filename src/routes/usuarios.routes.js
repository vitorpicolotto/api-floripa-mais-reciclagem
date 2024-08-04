const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router()
usuariosRoutes.post('/', UsuarioController.criarUsuario)
//Swagger nos parênteses 


module.exports = usuariosRoutes