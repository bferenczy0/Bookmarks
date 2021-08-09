'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmarks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Comments = this.hasMany(models.Comment, { onDelete: 'cascade' })
      // this.Tag = this.belongsTo(models.Tags, { through: models.BookmarkTags })
      // this.BookmarkTag = this.hasMany(models.BookmarkTags)
      // define association here
    }
  };
  Bookmarks.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookmarks',
  });
  return Bookmarks;
};