const sequelize = require("../config/connection");

const seedTeams = require("./teamData");
const seedPlayers = require("./playerData");
const seedUsers = require("./userData");
const seedGames = require("./gameData");
const seedLeagues = require("./leagueData");

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
