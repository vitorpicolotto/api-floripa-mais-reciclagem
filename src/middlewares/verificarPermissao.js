const Usuario = require('../models/Usuario')
const Permissao = require('../models/Permissao')


const verificarPermissao = (requisicaoPermissoes) => {
    return async (request, response, next) => {
        try {
            const {usuarioId} = request

            const usuario = await Usuario.findByPk(usuarioId,{
                include: {
                    model: Permissao,
                    through: {
                        attributes: []
                    }
                }
            })

            const permissoesUsuario = usuario.permissoes.map(p => p.descricao)
            const temPermissao = requisicaoPermissoes.every(permissao => permissoesUsuario.includes(permissao))

            if(!temPermissao){
                return response.status(401).json({erro: 'Você não possuí as permissões necessárias.'})
            }

            next()
        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro na requisição!'})
        }
    }
}

module.exports = verificarPermissao