'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolesAsignados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userDni: {
        type: Sequelize.STRING,
        primaryKey: true,
    //     references:{
    //       model: 'users',
    //       key: 'dni'
    // },
    // onDelete: 'CASCADE',
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