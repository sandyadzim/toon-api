'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title:'Ep.1',
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Ore_o_Suki_nano_wa_Omae_dake_kayo_light_novel_volume_1_cover.jpg/220px-Ore_o_Suki_nano_wa_Omae_dake_kayo_light_novel_volume_1_cover.jpg',
        id_webtoon:2,
      },
      {
        title:'Ep.2',
        image:'https://i1.wp.com/animenewsplus.net/wp-content/uploads/2019/05/FB_IMG_1557542708025.jpg?fit=1353%2C1920&ssl=1',
        id_webtoon:2,
      },
      {
        title:'Ep.3',
        image:'https://cdn.novelupdates.com/images/2018/08/Ni5AHfl.jpg',
        id_webtoon:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null,{});
  },
};
