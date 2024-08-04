'use strict';

//nome, CPF, nascimento, sexo, CEP, endereco, email, senha, createdAt, updatedAt.

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(
    'usuarios',
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
      cpf:{
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
      },
      nascimento:{
        type: Sequelize.DATE,
        allowNull: false
      },
      sexo:{
        type: Sequelize.ENUM,
        values: ['M', 'F', 'Outro'],
        allowNull: false
      },
      cep:{
        type: Sequelize.STRING(8),
        allowNull: false
      },
      endereco:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password_hash : { 
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
    await queryInterface.dropTable('usuarios');
  }
};
