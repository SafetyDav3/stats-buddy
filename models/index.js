// import all models
const Game = require('./Game');
const User = require('./User');
const League = require('./League');
const Player = require('./Player');
const Team = require('./Team')

// create associations
User.hasMany(League, {
    foreignKey: 'user_id'
});

League.belongsToMany(User, {
    foreignKey: 'user_id'
});

League.hasMany(Team, {
    foreignKey: 'league_id'
});

Team.belongsToMany(League, {
    foreignKey: 'league_id'
});

Team.hasMany(Player, {
    foreignKey: 'team_id'
});

Player.belongsTo(Team, {
    foreignKey: 'team_id'
});

Player.hasMany(Game, {
    foreignKey: 'player_id'
});

Game.belongsTo(Player, {
    foreignKey: 'player_id'
});

module.exports = { Game, User, League, Player, Team };