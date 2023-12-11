'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('empresasofertas', { 
      ideo: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        id_oferta: Sequelize.BIGINT,
        references:{
          model: 'ofertas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nif_empresa: {
        type: Sequelize.BIGINT,
        references:{
          model: 'empresas',
          key: 'nif'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('empresasofertas');
  }
};
