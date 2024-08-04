'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'locais',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        descricao:{
          type: Sequelize.TEXT,
          allowNull: false
        },
        usuarioID:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },
        cep:{
          type: Sequelize.STRING(8),
          allowNull: false
        },
        endereco:{
          type: Sequelize.STRING(100),
          allowNull: false
        },
        numero:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false
        },
        latitude: { 
          type: Sequelize.DECIMAL(10,8),
          allowNull: false
        },
        longitude: {
          type: Sequelize.DECIMAL(11,8),
          allowNull: false
        },
        residuos:{
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
     )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('locais')
  }
};
