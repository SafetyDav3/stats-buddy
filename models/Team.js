const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Team extends Model {}

Team.init(
  {
    team_id: {
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
    modelName: "team",
  }
);

module.exports = Team;
