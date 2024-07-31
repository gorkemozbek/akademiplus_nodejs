'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
                id:1,
                username: 'admin',
                email: 'admin@user.com',
                password: 'cc03e747a6afbbcbf8be7668acfebee5',
                createdAt: new Date(),
                updatedAt: new Date()
              }], {})

    await queryInterface.bulkInsert('Roles', [{      
      id:1,
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})

    await queryInterface.bulkInsert('UserRoles', [{
      id:1,
      userId: 1,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserRoles', null, {});
    await queryInterface.bulkDelete('Roles', null, {});
    await queryInterface.bulkDelete('Users', null, {});    
  }
};
