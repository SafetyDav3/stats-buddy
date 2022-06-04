const { Team } = require("../models");

const teamData = [
  {
    team_name: "Micro Brewers",
    manager: "Tony La Russa",
  },
  {
    team_name: "108 Stitches",
    manager: "Joe Madded",
  },
  {
    team_name: "Catchers In the Rye",
    manager: "Terry Francona",
  },
  {
    team_name: "Sultans Of Swing",
    manager: "Dusty Barker",
  },
  {
    team_name: "Pancake Batters",
    manager: "Bob Melvin",
  },
  {
    team_name: "Sandlot B-Team",
    manager: "Bud Black",
  },
];

const seedTeams = () => {
  Team.bulkCreate(teamData);
};

module.exports = seedTeams;
