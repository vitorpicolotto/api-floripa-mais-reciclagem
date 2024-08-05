const { Router } = require("express");
const PermissaoController = require("../controllers/PermissaoController");

const permissoesRoutes = new Router();

permissoesRoutes.post('/', PermissaoController.criar
/*
    #swagger.tags = ['Permissões'],
    #swagger.description = 'Endpoint para criar uma nova permissão para os usuários.',
        #swagger.parameters['criar'] = {
            in: 'body',
            description: 'Criação de permissão: cadastrarLocal. Necessário criar as permissões de excluirLocal e buscarLocal.',
            required: true,
            schema: { 
                $descricao: "cadastrarLocal"
            }
        }
*/
)
permissoesRoutes.get('/', PermissaoController.listarTodas
/*
    #swagger.tags = ['Permissões'],
    #swagger.description = 'Endpoint para buscar as permissão para os usuários. ',

*/
)
permissoesRoutes.delete('/:id', PermissaoController.deletar
/*
    #swagger.tags = ['Permissões'],
    #swagger.description = 'Endpoint para deletar uma permissão.',
        #swagger.parameters['deletar'] = {
            in: 'params',
            description: 'Exclusão de permissão. Inserir 'id' como parâmetro para excluir.',
            required: true
        }
*/
)

permissoesRoutes.post('/atribuir', PermissaoController.atribuirPermissao
/*
    #swagger.tags = ['Permissões'],
    #swagger.description = 'Endpoint para atribuir uma permissão. Adicionar permissões de 1 a 3 (cadastrar, excluir e buscar)',
        #swagger.parameters['deletar'] = {
            in: 'body',
            description: 'Atribuição de permissão a um usuário.',
            required: true,
            schema: { 
                $usuarioId: 1,
                $permissaoId: 1
            }
        }
*/
)

module.exports = permissoesRoutes;