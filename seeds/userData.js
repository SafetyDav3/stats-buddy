const { User } = require("../models");

const userData = [
  {
    email: "pokemon4ever72@gmail.com",
    password: "pokemon4ever",
  },
  {
    email: "Caraqu@gmail.com",
    password: "a123789654",
  },
  {
    email: "bahogbelat@gmail.com",
    password: "iyot14398",
  },
  {
    email: "updateios27@gmail.com",
    password: "rosie124",
  },
  {
    email: "cmonster@gmail.com",
    password: "554533",
  },
  {
    email: "ZartBoyIsBack@gmail.com",
    password: "0988723441955230",
  },
];

const seedUsers = () => {
  User.bulkCreate(userData);
};

module.exports = seedUsers;
