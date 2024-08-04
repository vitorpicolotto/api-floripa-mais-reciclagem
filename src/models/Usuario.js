const {hashSync} = require('bcryptjs')
const connection = require('../database/connection')
const { DataTypes } = require('sequelize')


const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM('M', 'F', 'Outros'),
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_hash:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


Usuario.beforeSave((usuario) => {
    usuario.password_hash = hashSync(usuario.password_hash, 10)
    return usuario
}) //Postman passava que a senha não estava batendo. Precisei incluir este passo agora para "hashar" a senha no PG. Funcionou!


module.exports = Usuario