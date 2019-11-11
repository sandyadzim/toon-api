'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    id_webtoon: DataTypes.INTEGER
  }, {});
  episode.associate = function(models) {
    // associations can be defined here
    episode.belongsTo(models.webtoon, {
      as:'webtoonId',
      foreignKey:'id_webtoon'
    });

    episode.belongsTo(models.user, {
      as:'createdBy',
      foreignKey:'created_by'
    })
  };
  return episode;
};