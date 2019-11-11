'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    id_webtoon: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {});
  episode.associate = function(models) {
    // associations can be defined here
  };
  return episode;
};