const connection = require('../database/connection')
const { DataTypes } = require('sequelize')


const Local = connection.define('locais',{
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      descricao:{
        type: DataTypes.TEXT,
        allowNull: false
      },
      usuarioID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        } //FK
      },
      cep:{
        type: DataTypes.STRING,
        allowNull: false
      },
      endereco:{
        type: DataTypes.STRING,
        allowNull: false
      },
      numero:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude: { 
        type: DataTypes.DECIMAL(10,8),
        allowNull: false
      },
      longitude: {
        type: DataTypes.DECIMAL(11,8),
        allowNull: false
      },
      residuos:{
        type: DataTypes.STRING,
        allowNull: false
      }
})

module.exports = Local