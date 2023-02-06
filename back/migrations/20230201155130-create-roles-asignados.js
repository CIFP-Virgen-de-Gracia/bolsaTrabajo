'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolesAsignados', {
      dni: {
        type: Sequelize.STRING,
        primaryKey: true,
    //     references:{
    //       model: 'users',
    //       key: 'dni'
    // },
    // onDelete: 'CASCADE',
    },
    nick: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
      roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      //   references:{
      //     model: 'roles',
      //     key: 'id'
      // },
      // onDelete: 'CASCADE',
    },
    //TODO: FALTAN DATOS DE USUARIO Y PASSWORD

    validateAt: {
      type: Sequelize.DATETIME,
      allowNull: true,
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