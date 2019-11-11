'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourite = sequelize.define('favourite', {
    user_id: DataTypes.INTEGER,
    webtoon_id: DataTypes.INTEGER
  }, {});
  favourite.associate = function(models) {
    // associations can be defined here
  };
  return favourite;
};