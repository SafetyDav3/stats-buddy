const router = require('express').Router();
const sequelize = require('../config/connection');
const { League, Player, Team } = require('../models');

//GET all League
router.get('/league', async (req, res) => {
    try {
      const dbLeagueData = await League.findAll({
        include: [
          {
            model: Team,
            attributes: ['team_name'],
          },
        ],
      });
  
      const leagues = dbLeagueData.map((league) =>
        league.get({ plain: true })
      );
  
      res.render('homepage', {
        leagues,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //GET a single League
  router.get('/league/id:', async, (req, res) => {

  });