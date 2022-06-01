const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class League extends Model {}

League.init(
  {
    league_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
