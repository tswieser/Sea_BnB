'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    dock_id: DataTypes.INTEGER
  }, {});
  Reservation.associate = function (models) {
    // associations can be defined here
    Reservation.belongsTo(models.User, { foreignKey: "user_id" });
    Reservation.belongsTo(models.Dock, { foreignKey: "dock_id" })
  };
  return Reservation;
};
