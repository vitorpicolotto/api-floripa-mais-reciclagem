const { sign } = require("jsonwebtoken")
const Usuario = require("../models/Usuario")
const {compareSync} = require('bcryptjs')

/*
Requisitos:
- Verificar se email e senha são fornecidos
- Verificar se email e senha estão corretos
- Token de login
*/
class LoginController{
    async login(request, response){
        try {
            const dados = request.body

            if(!dados.email || !dados.password){
                return response.status(400).json({mensagem: 'Nome e senha obrigatórios, favor preencher'})
            }
            

            //Verificar usuário/email
            const usuario = await Usuario.findOne({
                where: {email: dados.email}
            })
            if(!usuario) {
                return response.status(404).json({erro: 'Email não encontrado. Tente novamente!'})
            }
            
            //Verificar senha
            const senha = compareSync(dados.password, usuario.password_hash)
            if(senha === false){
                return response.status(404).json({erro: 'Senha incorreta! Tente novamente. '})
            }

            //Token de login
            const token = sign({
                id: usuario.id,
            }, 
                process.env.SECRET_JWT,{
                    expiresIn:'1d'
                }
            )

            response.json({
                token: token,
                nome: usuario.nome
            })


        } catch (error) {
            console.log(error)
            response.status(500).json({erro: 'Erro ao efetuar login!'})
        }
    }
}


module.exports = new LoginController()