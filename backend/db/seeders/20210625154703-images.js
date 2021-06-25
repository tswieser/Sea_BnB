'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {
        dock_id: 1,
        url: 'https://www.accudock.com/wp-content/uploads/best-docks-for-rivers-river-docks.jpg'
      },
      {
        dock_id: 1,
        url: 'https://www.homestratosphere.com/wp-content/uploads/2018/11/floating-dock-nov222018-min.jpg'
      },
      {
        dock_id: 1,
        url: 'https://rollingbarge.com/wp-content/uploads/2011/12/floating-dock-pennsylvania.jpg'
      },
      {
        dock_id: 1,
        url: 'https://rollingbarge.com/wp-content/uploads/2011/12/floating-dock-lake.jpg'
      },
      {
        dock_id: 1,
        url: 'https://rollingbarge.com/wp-content/uploads/2019/09/aluminum-gangway-columbia-river.jpeg'
      },

      {
        dock_id: 2,
        url: 'https://s3.amazonaws.com/snagaslip.com/marina_images/images/000/001/122/original/Screen_Shot_2018-06-29_at_1.13.16_PM.png?1530292576'
      },
      {
        dock_id: 2,
        url: 'https://img.marinas.com/v2/60321770357454c501a79433fffb21998ba05856adfa13026167362eeeb6017f.jpg'
      },
      {
        dock_id: 2,
        url: 'https://s3.amazonaws.com/snagaslip.com/marina_images/images/000/003/077/original/Private_Boat_Slip_for_Sale_-_Baltimore_Marina_-_Snag-A-Slip.jpg?1617997784'
      },
      {
        dock_id: 2,
        url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/178000/178401-Baltimore-Inner-Harbor.jpg'
      },
      {
        dock_id: 2,
        url: 'https://www.moorforless.com/Image/Show?pid=1714&size=2'
      },

      {
        dock_id: 3,
        url: 'https://s3.amazonaws.com/bb-cms/AppData/Websites/824/Images/slider/slide-01.jpg?Action=thumbnail&Width=1900&Height=790&algorithm=fill_proportional'
      },
      {
        dock_id: 3,
        url: 'https://img.marinas.com/v2/feefbe7115cf44f20a9adef119002e2d018f153da27286ba407267c5de7539a2.jpg'
      },
      {
        dock_id: 3,
        url: 'https://ocsunsetmarina.com/wp-content/uploads/2014/11/DJI00621.jpg'
      },
      {
        dock_id: 3,
        url: 'https://www.findrentals.com/vacations/rentals/12782/131448/2.JPG'
      },
      {
        dock_id: 3,
        url: 'https://rhondasosprey.com/assets/images/pages/ocean-city-md.jpg'
      },

      {
        dock_id: 4,
        url: 'https://img.marinas.com/v2/392b694f16a65912968f8a8feb097d777032d688daa7a50e3352e176a48808b1.jpg'
      },
      {
        dock_id: 4,
        url: 'https://www.loggerheadmarinas.com/wp-content/uploads/1300x600/1300x600_vero-beach-hero.jpg'
      },
      {
        dock_id: 4,
        url: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/27/fe/84/marina-office-view.jpg'
      },
      {
        dock_id: 4,
        url: 'https://www.tgyg.com/photos/articles/best-marinas-florida-west-coast.jpg'
      },
      {
        dock_id: 4,
        url: 'https://mk0muxamiguhivhwob4h.kinstacdn.com/wp-content/uploads/fmc-florida-construction-on-commercial-dock-southwest-florida-2.jpg'
      },

      {
        dock_id: 5,
        url: 'https://s3.amazonaws.com/snagaslip.com/marina_images/images/000/001/516/original/20180129_140720.jpg?1557081246'
      },
      {
        dock_id: 5,
        url: 'https://bowleysmarina.com/wp-content/uploads/2018/01/35015476070_568863ec3e_k-1024x684.jpg'
      },
      {
        dock_id: 5,
        url: 'https://s3.amazonaws.com/snagaslip.com/marina_images/images/000/002/894/original/IMG951444.jpg?1613333448'
      },
      {
        dock_id: 5,
        url: 'https://www.moorforless.com/Image/Show?pid=1728&size=2'
      },
      {
        dock_id: 5,
        url: 'https://www.piersevenmarina.com/images/gallery/slips_storage/thumbs/02.jpg'
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});

  }
};
