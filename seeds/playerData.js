const { Player } = require("../models");

const playerData = [
  {
    player_name: "Michael Case",
    team_id: 1,
  },
  {
    player_name: "Nicole McLean",
    team_id: 1,
  },
  {
    player_name: "Tiffany Golden",
    team_id: 1,
  },
  {
    player_name: "Jenna Sparks",
    team_id: 1,
  },
  {
    player_name: "Dustin Branch",
    team_id: 1,
  },
  {
    player_name: "Krystal Heath",
    team_id: 1,
  },
  {
    player_name: "Vincent Watkins",
    team_id: 1,
  },
  {
    player_name: "Christian McAllister",
    team_id: 1,
  },
  {
    player_name: "Melanie Davidson",
    team_id: 1,
  },
  {
    player_name: "Chase Houston",
    team_id: 1,
  },
  {
    player_name: "Houston Park",
    team_id: 2,
  },
  {
    player_name: "Karina Richardson",
    team_id: 2,
  },
  {
    player_name: "Kathy Fisher",
    team_id: 2,
  },
  {
    player_name: "Gordon Lang",
    team_id: 3,
  },
  {
    player_name: "Deangelo Kearney",
    team_id: 3,
  },
  {
    player_name: "Janell Lang",
    team_id: 3,
  },
  {
    player_name: "Casandra High",
    team_id: 4,
  },
  {
    player_name: "Cristal Blackwell",
    team_id: 4,
  },
  {
    player_name: "Chastity Nolan",
    team_id: 4,
  },
  {
    player_name: "Greg O'Connell",
    team_id: 5,
  },
  {
    player_name: "Kirstin Blackwell",
    team_id: 5,
  },
  {
    player_name: "Colton Buckley",
    team_id: 5,
  },
  {
    player_name: "Renae King",
    team_id: 6,
  },
  {
    player_name: "Jan Small",
    team_id: 6,
  },
  {
    player_name: "Heriberto Wright",
    team_id: 6,
  },
];

const seedPlayers = () => {
  Player.bulkCreate(playerData);
};

module.exports = seedPlayers;
