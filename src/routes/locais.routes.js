const { Router } = require('express')
const LocalController = require('../controllers/LocalController')
const verificarPermissao = require('../middlewares/verificarPermissao')


const locaisRoutes = new Router()

locaisRoutes.post('/', verificarPermissao(['cadastrarLocal']), LocalController.cadastrar
/*
    #swagger.tags = ['Locais de coleta'],
    #swagger.description = 'Endpoint para cadastrar um novo local de coleta.',
        #swagger.parameters['criarUsuario'] = {
            in: 'body',
            description: 'Cadastro de usuário',
            required: true,
            schema: { 
                $usuarioID: 3,
                $nome: "UFSC - CCB",
                $descricao: "Coleta de resíduos biológicos",
                $cep: "88040900",
                $endereco: "Rua Roberto Sampaio Gonzaga",
                $numero: 00,
                $bairro: "Trindade",
                $latitude: -27.601101,
                $longitude: -48.520001,
                $residuos: "Seringas, sangue, outros materiais biológicos"
            }
        }
*/
)
locaisRoutes.get('/', verificarPermissao(['buscarLocal']),LocalController.listarTodos
/*
    #swagger.tags = ['Locais de coleta'],
    #swagger.description = 'Endpoint para buscar os locais de coleta catastrados. ',

*/
)
locaisRoutes.get('/:id', verificarPermissao(['buscarLocal']),LocalController.listarUm
/*
    #swagger.tags = ['Locais de coleta'],
    #swagger.description = 'Endpoint para buscar um local de coleta pelo seu id.',
*/
)
locaisRoutes.put('/:id', verificarPermissao(['cadastrarLocal']), LocalController.atualizar
/*
    #swagger.tags = ['Locais de coleta'],
    #swagger.description = 'Endpoint para editar um local de coleta. Inserir o id do local',
        #swagger.parameters['atualizar'] = {
            in: 'body',
            description: 'Listagem de locais.',
            required: true,
            schema: { 
                $nome: "UFSC - Centro de Ciências Biológicas",
            }
        }
*/
)
locaisRoutes.delete('/:id', verificarPermissao(['excluirLocal']),LocalController.deletar
/*
    #swagger.tags = ['Locais de coleta'],
    #swagger.description = 'Endpoint para deletar um local de coleta.',
        #swagger.parameters['deletar'] = {
            in: 'params',
            description: 'Exclusão de local de coleta. Inserir 'id' como parâmetro para excluir.',
            required: true
        }
*/
)

locaisRoutes.get('/:id/maps', LocalController.buscarLinkGoogleMaps
/*
    #swagger.tags = ['Locais de coleta'],
    #swagger.description = 'Endpoint para buscar um link com as coordenadas do local de coleta.'
*/

)

module.exports = locaisRoutes