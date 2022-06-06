const { League } = require("../models");

const leagueData = [
  {
    name: "Round Tripper",
    user_id: 1,
  },
];

const seedLeague = () => {
  League.bulkCreate(leagueData);
};

module.exports = seedLeague;
