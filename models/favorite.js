'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    webtoon_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    is_favorite: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
  };
  return favorite;
};