const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ab: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    hits: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    bb: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    strikeouts: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    rbi: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    rs: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    innings: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    earned_runs: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    hitsGiven: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    k: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    walks: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    average: {
        type: DataTypes.VIRTUAL,
        get(){
            return (this.hits/this.ab)
        },
    },
    obp: {
        type: DataTypes.VIRTUAL,
        get(){
            return ((this.hits+this.bb)/(this.hits))
        }
    },
    era: {
        type: DataTypes.VIRTUAL,
        get(){
            return (9 * (this.earned_runs/(Math.trunc(this.innings) + (10 * (this.innings - Math.trunc(this.innings))/3))));
        }
    },
    player_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'player',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;