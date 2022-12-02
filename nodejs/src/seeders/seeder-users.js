'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'HoiDanIT',
      lastName: 'Eric',
      address: 'usa',
      phonenumber: '123456789',
      gender: 1,
      image: 'chua co hinh',
      roleId: 'R1',
      positionId: 'chua co mo ta',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
