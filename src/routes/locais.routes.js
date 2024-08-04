const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

/*
Rotas necessárias (CRUD completo):
- Cadastrar novo local
- Buscar lista de locais
- Buscar apenas um local
- Atualizar local
- Deletar local
 */

const locaisRoutes = new Router()

locaisRoutes.post('/', LocalController.cadastrar)
locaisRoutes.get('/', LocalController.listarTodos)
locaisRoutes.get('/:id', LocalController.listarUm)
locaisRoutes.put('/:id', LocalController.atualizar)
locaisRoutes.delete('/:id', LocalController.deletar)


module.exports = locaisRoutes