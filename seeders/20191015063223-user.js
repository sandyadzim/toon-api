'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email:'sandy@gmail.com',
        password:'xxx',
        name:'Sandy Rahmansyah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email:'adzim@gmail.com',
        password:'xxx',
        name:'Muhammad Adzim',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null,{});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};