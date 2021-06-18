'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dock = sequelize.define('Dock', {
    dock_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    user_id: DataTypes.INTEGER
  }, {});
  Dock.associate = function(models) {
    // associations can be defined here
  };
  return Dock;
};