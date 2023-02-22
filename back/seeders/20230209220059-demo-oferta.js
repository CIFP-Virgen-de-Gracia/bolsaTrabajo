//Realizado por Khattari
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ofertas', [{
      titulo: 'Oferta de prueba',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae? Deserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum',
      lugar: 'ubicacion ficticia',
      presencial: 0,
      jornada: 'completa'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ofertas', null, {});
  }
};
