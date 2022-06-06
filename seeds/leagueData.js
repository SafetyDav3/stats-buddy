const { League } = require("../models");

const leagueData = [
  {
    name: "Round Tripper",
    user_id: 1,
  },
];

const seedLeagues = () => League.bulkCreate(leagueData);

module.exports = seedLeagues;
