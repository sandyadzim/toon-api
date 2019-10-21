'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('favorites',[
      {
        user_id: 1,
        webtoon_id: 2,
        is_favorite:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        webtoon_id: 1,
        is_favorite:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        webtoon_id: 1,
        is_favorite:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        webtoon_id: 2,
        is_favorite:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favorites', null, {});
  }
};
