
const connection = require('../database/connection')
const { DataTypes } = require('sequelize')


const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    nascimento: {
        type: DataTypes.DATEONLY
    },
    sexo: {
        type: DataTypes.ENUM('M', 'F', 'Outros')
    },
    cep: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password_hash:{
        type: DataTypes.STRING
    }
})





module.exports = Usuario