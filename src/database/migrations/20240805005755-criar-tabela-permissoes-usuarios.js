'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario_permissoes', 
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
        },
        usuarioId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'id'
          }
        },
        permissaoId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'permissoes',
            key: 'id'
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario_permissoes');
  }
};
