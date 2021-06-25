'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Docks', [
      {
        dock_name: 'Water Way',
        address: '123 water way',
        city: 'York',
        state: 'PA',
        price: 24.99,
        lat: null,
        lng: null,
        user_id: 1,
        createdAt: '2021-06-21 00:00:00-04',
        updatedAt: '2021-06-21 00:00:00-04'
      },
      {
        dock_name: 'North Shore Ocean View Slip',
        address: '79 North Shore blvd',
        city: 'Baltimore',
        state: 'MD',
        price: 32.99,
        lat: null,
        lng: null,
        user_id: 1,
        createdAt: '2021-06-21 00:00:00-04',
        updatedAt: '2021-06-21 00:00:00-04'
      },
      {
        dock_name: 'Dock With a View',
        address: '99  Sea shell drive',
        city: 'Ocean City',
        state: 'MD',
        price: 79.99,
        lat: null,
        lng: null,
        user_id: 1,
        createdAt: '2021-06-21 00:00:00-04',
        updatedAt: '2021-06-21 00:00:00-04'
      },
      {
        dock_name: 'Sandy Shores Marina',
        address: '28 Canal Street',
        city: 'Vero Beach',
        state: 'Fl',
        price: 13.99,
        lat: null,
        lng: null,
        user_id: 1,
        createdAt: '2021-06-21 00:00:00-04',
        updatedAt: '2021-06-21 00:00:00-04'
      },
      {
        dock_name: 'Safe Haven Marina',
        address: '3939 Wet street',
        city: 'Ocean City',
        state: 'MD',
        price: 199.99,
        lat: null,
        lng: null,
        user_id: 1,
        createdAt: '2021-06-21 00:00:00-04',
        updatedAt: '2021-06-21 00:00:00-04'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Docks', null, {});

  }
};
