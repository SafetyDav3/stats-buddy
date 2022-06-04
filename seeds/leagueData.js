const { League } = require("../models");

const leagueData = [
  {
    name: "Round Tripper",
  },
];

const seedLeague = () => {
  League.bulkCreate(leagueData);
};

module.exports = seedLeague;
