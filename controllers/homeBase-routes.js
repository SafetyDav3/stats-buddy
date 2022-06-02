const router = require('express').Router();
const sequelize = require('../config/connection');
const { League, Player, Team } = require('../models');

router.get('/', async, (req, res) => {
    
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });