'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    dock_id: DataTypes.INTEGER
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "user_id" })
    Review.belongsTo(models.Dock, { foreignKey: "dock_id" })
  };
  return Review;
};
