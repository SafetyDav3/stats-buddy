const router = require('express').Router();
const { User, League, Player, Team, Game } = require('../models');
const withAuth = require('../utils/auth');
// : Import the custom middleware


router.get('/', async (req, res) => {
  // if(req.session.loggedIn) {
  //   res.redirect('/league');
  //   return;
  // }
  
  res.render('home')
})

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/league');
  //   return;
  // }

  res.render('login');
});

router.get('/leagues', async (req, res) => {
  League.findAll({
    attributes: ['id', 'name']})
    .then(dbLeagueData => {
      const leagues = dbLeagueData.map(league => league.get({plain: true}));
      res.render('leagues', {
        leagues,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/league/:id', (req, res) => {
  League.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'name'
    ],
    include: [
      {
        model: Team,
        attributes: ['id', 'team_name', 'manager'],
      }
    ]
  })
    .then(dbLeagueData => {
      if (!dbLeagueData) {
        res.status(404).json({ message: 'No league found with this id' });
        return;
      }

      // serialize the data
      const teams = dbLeagueData.get({ plain: true });
      console.log(teams)

      // pass data to template
      res.render('single-league', {
        teams,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/signup', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('signup');
});

router.get('/team/:id', (req, res) => {
    Team.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
          'team_name',
          'manager'
      ],
      include: [
        {
          model: Player,
          attributes: ['id', 'player_name'],
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No team found with this id' });
          return;
        }
        // serialize the data
        const players = dbPostData.get({ plain: true });
        console.log(players)
        // pass data to template
        res.render('team', {
          players,
          // loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/player/:id', (req, res) => {
    Player.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
          'player_name'
      ],
      include: [
        {
          model: Game,
          attributes: [
            'id',
              'ab',
              'hits',
              'bb',
              'strikeouts',
              'rbi',
              'rs',
              'innings',
              'earned_runs',
              'hitsGiven',
              'k',
              'walks'
          ]
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No player found with this id' });
          return;
        }
  
        // serialize the data
        const games = dbPostData.get({ plain: true });
        console.log(games)
        // pass data to template
        res.render('player', {
          games,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;