'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookmarkTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.Bookmark = this.belongsTo(models.Bookmarks)
      // this.Tag = this.belongsTo(models.Tags)
      // define association here
    }
  };
  BookmarkTags.init({
  }, {
    sequelize,
    modelName: 'BookmarkTags',
  });
  return BookmarkTags;
};