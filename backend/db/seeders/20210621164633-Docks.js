'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Docks', [{

      dock_name: 'Water Way',
      address: '123 water way',
      city: 'York',
      state: 'PA',
      price: 24.99,
      lat: null,
      lng: null,
      user_id: 1,
      createdAt: '2021-06-21 12:52:45.208854-04',
      updatedAt: '2021-06-21 12:52:45.208854-04'
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Docks', null, {});

  }
};
