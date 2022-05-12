'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      Email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      Password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }

    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('User')
  }
};
