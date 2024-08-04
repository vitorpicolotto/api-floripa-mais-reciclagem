const Local = require("../models/Local")


class LocalController{
    async cadastrar(request, response){
        try {
            const dados = request.body
//Validações
            if(!dados){
                return response.status(400).json({erro: 'Dados incompletos. Favor informar todos os dados!'})
            }

            if(dados.cep.length !== 8){
                return response.status(400).json({erro: 'CEP deve possuir 8 caracteres.'})
            }

//Cadastro
            const local = await Local.create({
                usuarioID: dados.usuarioID,
                nome: dados.nome,
                descricao: dados.descricao,
                cep: dados.cep,
                endereco: dados.endereco,
                numero: dados.numero,
                bairro: dados.bairro,
                latitude: dados.latitude,
                longitude: dados.longitude,
                residuos: dados.residuos
            })
            response.status(201).json({
                mensagem: 'Ponto de coleta cadastrado com sucesso!',
                nome: local.nome,
                descricao: local.descricao,
                cep: local.cep,
                residuos: local.residuos,
                createdAt: local.createdAt
            })


        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: 'Não foi possível cadastrar o ponto de coleta'})
        }
    }


    async listarTodos(request, response){
        try {
            const locais = await Local.findAll({
                attributes: ['id','nome', 'descricao', 'cep', 'endereco', 'numero', 'bairro', 'latitude', 'longitude', 'residuos'
                ], order: [['id']]
            })

            if(locais.length === 0){
                response.status(404).json({mensagem: 'Nenhum local cadastrado.'})
            }

            response.json(locais)
        } catch (error) {
            response.status(500).json({mensagem: 'Erro ao listar locais'})
        }
    }

    async listarUm(request, response){
        try {
            const id = request.params.id
            const local = await Local.findByPk(id)

            if(!local){
               return response.status(404).json({mensagem: 'Local de coleta não encontrado.'})
            }

            response.json(local)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Erro ao buscar local de coleta.'
            })
        }
    }


    async atualizar(request, response){
        try {
            const id = request.params.id
            const dados = request.body
            const local = await Local.findByPk(id)
            

            if(!local){
               response.status(404).json({mensagem: 'Local de coleta não encontrado.'})
            }

            local.nome = dados.nome || local.nome
            local.descricao = dados.descricao || local.descricao
            local.cep = dados.cep || local.cep
            local.endereco = dados.endereco || local.endereco
            local.numero = dados.numero || local.numero
            local.bairro = dados.bairro || local.bairro
            local.latitude = dados.latitude || local.latitude
            local.longitude = dados.longitude || local.longitude
            local.residuos = dados.residuos || local.residuos

            await local.save()

            response.json(local)
        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao atualizar o local de coleta!'})
        }
    }

    async deletar(request, response){
        try {
            const id = request.params.id 
            const local = await Local.findByPk(id)

            if(!local){
                response.status(404).json({mensagem: 'Local de coleta não encontrado'})
            }

            await local.destroy()

            response.status(204).json()
        } catch (error) {
            response.status(500).json({mensagem: 'Erro ao deletar local de coleta!'})
        }
    }
}

module.exports = new LocalController()