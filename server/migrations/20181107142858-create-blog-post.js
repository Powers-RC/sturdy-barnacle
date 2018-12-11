'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT,
        defaultValue:'None'
      },
      data_file: {
        type: Sequelize.TEXT,
        defaultValue:'None'
      },
      status: {
        type: Sequelize.TEXT
      },
      content_type: {
        type: Sequelize.TEXT
      },
      comment_cnt: {
        type: Sequelize.NUMERIC,
        defaultValue: 0
      },
      like_cnt: {
        type: Sequelize.NUMERIC,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      update_reason: {
        allowNull:false,
        type: Sequelize.TEXT,
        defaultValue: "Initial Entry"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('blog_posts');
  }
};