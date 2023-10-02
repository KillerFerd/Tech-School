'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // define association here
    }
  }
  Author.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(75),
      allowNull: false,
      field: 'last_name'
    },
    picture: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: 'https://picsum.photos/seed/picsum/500'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Author',
    freezeTableName: true,
    tableName: 'author',
    underscored: true
  });

  return Author;
};