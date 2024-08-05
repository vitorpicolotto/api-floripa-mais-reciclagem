const Permissao = require("../models/Permissao")
const Usuario = require("../models/Usuario")


class PermissaoController {
    async criar(request, response) {
        try {
            const descricao = request.body

            if(!descricao){
                return response.status(400).json({ mensagem: "Descrição é obrigatório" })
            }

            const permissao = await Permissao.create(descricao)
            response.status(201).json(permissao)
        } catch (error) {
            response.status(500).json({mensagem: 'Erro ao cadastrar a permissão'})
        }
    }

    async listarTodas(request, response) {
        try {
            const permissoes = await Permissao.findAll()
            response.json(permissoes)
        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao listar as permissões'})
        }
    }

    async deletar(request, response) {
        try {
            const id = request.params.id
            const permissao = await Permissao.findByPk(id)

            if (!permissao) {
                response.status(404).json({mensagem: 'Permissão não encontrada!'})
            }

            await permissao.destroy()

            response.status(204).json()

        } catch (error) {
            response.status(500).json({mensagem: 'Erro ao deletar a permissao'})
        }
    }

    async atribuirPermissao(request, response) {
        try{
            const { usuarioId, permissaoId } = request.body

            const usuario = await Usuario.findByPk(usuarioId)
            const permissao = await Permissao.findByPk(permissaoId)

            if (!usuario || !permissao) {
                response.status(404).json({mensagem: 'Usuário ou permissão não foram encontrados'})
            }

            await usuario.addPermissoes(permissao)

            response.status(204).json()
        }
        catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Falha na requisição'})
        }
    }
}

module.exports = new PermissaoController()