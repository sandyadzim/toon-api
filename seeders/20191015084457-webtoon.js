'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        title:"Kishuku Gakkou no Juliet",
        genre: "romance",
        is_favorite: false,
        image: "https://images4.alphacoders.com/736/thumb-1920-736034.png",
        created_by: 1
      },
      {
        title:"OreSuKi",
        genre: "comedy",
        is_favorite: false,
        image: "https://www.animenewsnetwork.com/hotlink/thumbnails/crop600x315/cms/news.3/150420/ore-wo-suki-na-no-wa-omae-dake-ka-yo.jpg",
        created_by: 1
      },
      {
        title:"TenSura",
        genre:"action",
        image:"https://vignette.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/1/13/Anime_Slider.jpg/revision/latest/scale-to-width-down/670?cb=20181215122651",
        is_favorite: true,
        created_by: 1
      },
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
