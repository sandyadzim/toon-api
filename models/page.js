'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_webtoon: DataTypes.INTEGER,
    id_episode: DataTypes.INTEGER
  }, {});
  page.associate = function(models) {
    // associations can be defined here
  };
  return page;
};