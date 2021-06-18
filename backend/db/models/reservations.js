'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define('Reservations', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    dock_id: DataTypes.INTEGER
  }, {});
  Reservations.associate = function(models) {
    // associations can be defined here
  };
  return Reservations;
};
