const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manager: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    league_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'league',
        key: 'id'
      }
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
