const sequelize = require("../config/connection");

const seedUsers = require("./userData");
const seedLeagues = require("./leagueData");
const seedTeams = require("./teamData");
const seedPlayers = require("./playerData");
const seedGames = require("./gameData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedLeagues();
  await seedTeams();
  await seedPlayers();
  await seedGames();

  process.exit(0);
};

seedAll();
