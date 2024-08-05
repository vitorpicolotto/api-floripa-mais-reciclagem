const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router()
usuariosRoutes.post('/', UsuarioController.criarUsuario
/*
    #swagger.tags = ['Usuário'],
    #swagger.description = 'Endpoint para cadastrar um novo usuário.',
        #swagger.parameters['criarUsuario'] = {
            in: 'body',
            description: 'Cadastro de usuário',
            required: true,
            schema: { 
                $nome: "Kratos",
                $cpf: "01234567890",
                $nascimento: "2005-06-30",
                $sexo: "M",
                $cep: "88085155",
                $endereco: "Rua Campolino Alves",
                $email: "kratos@email.com",
                $password: "atreus123456"
            }
        }
*/


)



module.exports = usuariosRoutes