const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
const Usuario = require('../models/Usuario')

/*
Requisitos:
1. Cadastrar usuário: incluir todas as informações da base de dados
2. Lógica de verificação dos dados:
- Verificar se todos os dados estão preenchidos
- Verificar se o CPF já existe
- Verificar se o e-mail já existe
- Verificar se o e-mail é válido (Regex)
- Verificar se a senha é válida (minimo 8 caracteres??)
- Verificar se o CEP possui apenas 8 caracteres
*/

class UsuarioController{
    async criarUsuario(request, response){
        try {
            const dados = request.body
            
//Verificação das condições de cadastro
            //Dados preenchidos
            if(!dados){
                return response.status(400).json({erro: 'Favor preencher todos os campos'})
            }

            //CPF
            const cpfExistente = await Usuario.findOne(
                {where: {cpf: dados.cpf}}
            )

            if(cpfExistente){
                return response.status(409).json({erro: 'CPF já cadastro. Seguir para área de login.'})
            }

            //Email
            const emailExistente = await Usuario.findOne(
                {where: {email: dados.email}}
            )

            if(emailExistente){
                return response.status(400).json({erro: 'E-mail já cadastrado. Seguir para área de login.'})
            }

            if (padraoEmail.test(dados.email) === false){
                return response.status(409).json({erro: 'E-mail inválido. Favor verificar se segue o padrão: exemplo@email.com .'})
            }

            //Senha
            if(!(dados.password?.length >= 8 && dados.password?.length <= 24)){
                return response.status(400).json({erro: 'A senha deve possuir entre 8 e 16 caracteres.'})
            }

            //CEP
            if(dados.cep.length !== 8){
                return response.status(400).json({erro: 'CEP deve possuir 8 caracteres.'})
            }


//Cadastrar o usuário
            const usuario = await Usuario.create({
                nome: dados.nome,
                cpf: dados.cpf,
                nascimento: dados.nascimento,
                sexo: dados.sexo,
                cep: dados.cep,
                endereco: dados.endereco,
                email: dados.email,
                password_hash: dados.password
            })
            response.status(201).json({
                mensagem: 'Usuário cadastrado com sucesso!',
                nome: usuario.nome,
                email: usuario.email,
                createdAt: usuario.createdAt
            })


        } catch (error) {
            console.log(error)
            response.status(500).json({mensagem: 'Não foi possível cadastrar o usuário'})
        }
    }
}


module.exports = new UsuarioController()