const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class League extends Model {}

League.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "league",
  }
);

module.exports = League;
