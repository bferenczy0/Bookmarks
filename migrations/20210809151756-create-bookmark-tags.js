'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BookmarkTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BookmarkId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Bookmarks',
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Tags',
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BookmarkTags');
  }
};