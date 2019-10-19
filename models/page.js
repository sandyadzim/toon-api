'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id_episode: DataTypes.INTEGER
  }, {});
  page.associate = function(models) {
    // associations can be defined here
    page.belongsTo(models.episode,{
      as:'episodeId',
      foreignKey:'id_episode'
    })
  };
  return page;
};