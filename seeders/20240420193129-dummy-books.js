'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Book 1',
        author: 'Author 1',
        published_date: new Date(),
        genre: 'Fiction',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Book 2',
        author: 'Author 2',
        published_date: new Date(),
        genre: 'Fantasy',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
