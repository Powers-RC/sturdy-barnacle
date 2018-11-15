'use strict';
module.exports = (sequelize, DataTypes) => {
  const blog_posts = sequelize.define('blog_posts', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      },
    title: DataTypes.TEXT,
    content: {
      type: DataTypes.TEXT,
      defaultValue:'None'
    },
    image: {
      type:DataTypes.TEXT,
      defaultValue:'None'
    },
    data_file: DataTypes.TEXT,
    status: DataTypes.TEXT,
    content_type: DataTypes.TEXT,
    comment_cnt: {
      type: DataTypes.NUMERIC,
      defaultValue: 0
    },
    like_cnt: {
      type: DataTypes.NUMERIC,
      defaultValue: 0
    },

    update_reason: DataTypes.TEXT
  }, {});
  blog_posts.associate = function(models) {
    // associations can be defined here
  };
  return blog_posts;
};