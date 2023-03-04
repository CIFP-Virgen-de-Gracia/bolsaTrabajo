//Ines
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolesAsignados', {

      nif: {
        type: Sequelize.STRING(9),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'User',
          key: 'nif'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idRol: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Roles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RolesAsignados');
  }
};