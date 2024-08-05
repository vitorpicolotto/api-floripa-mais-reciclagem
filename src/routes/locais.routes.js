const { Router } = require('express')
const LocalController = require('../controllers/LocalController')
const verificarPermissao = require('../middlewares/verificarPermissao')

/*
Rotas necessárias (CRUD completo):
- Cadastrar novo local
- Buscar lista de locais
- Buscar apenas um local
- Atualizar local
- Deletar local
 */

const locaisRoutes = new Router()

locaisRoutes.post('/', verificarPermissao(['cadastrarLocal']), LocalController.cadastrar)
locaisRoutes.get('/', verificarPermissao(['buscarLocal']),LocalController.listarTodos)
locaisRoutes.get('/:id', verificarPermissao(['buscarLocal']),LocalController.listarUm)
locaisRoutes.put('/:id', verificarPermissao(['editarLocal']), LocalController.atualizar)
locaisRoutes.delete('/:id', verificarPermissao(['excluirLocal']),LocalController.deletar)

locaisRoutes.get('/:id/maps', LocalController.buscarLinkGoogleMaps)

module.exports = locaisRoutes