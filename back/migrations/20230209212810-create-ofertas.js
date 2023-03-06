//Realizado por Khattari
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ofertas', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING(30)
      },
      descripcion: {
        type: Sequelize.STRING(15000)
      },
      lugar: {
        type: Sequelize.STRING(50)
      },
      presencial: {
        type: Sequelize.INTEGER
      },
      jornada: {
        type: Sequelize.STRING(30)
      } 
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('ofertas');
  }
};
