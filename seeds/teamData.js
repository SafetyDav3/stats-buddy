const { Team } = require("../models");

const teamData = [
  {
    team_name: "Micro Brewers",
    manager: "Tony La Russa",
    league_id: 1,
  },
  {
    team_name: "108 Stitches",
    manager: "Joe Madded",
    league_id: 1,
  },
  {
    team_name: "Catchers In the Rye",
    manager: "Terry Francona",
    league_id: 1,
  },
  {
    team_name: "Sultans Of Swing",
    manager: "Dusty Barker",
    league_id: 1,
  },
  {
    team_name: "Pancake Batters",
    manager: "Bob Melvin",
    league_id: 1,
  },
  {
    team_name: "Sandlot B-Team",
    manager: "Bud Black",
    league_id: 1,
  },
];

const seedTeams = () => Team.bulkCreate(teamData);

module.exports = seedTeams;
