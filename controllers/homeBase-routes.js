const router = require('express').Router();
const { User, League, Player, Team, Game } = require('../models');
const withAuth = require('../utils/auth');
// : Import the custom middleware


router.get('/', async (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/leagues');
    return;
  }
  
  res.render('home')
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/leagues');
    return;
  }

  res.render('login');
});

router.get('/leagues', withAuth, async (req, res) => {
  League.findAll({
    attributes: ['id', 'name']})
    .then(dbLeagueData => {
      const leagues = dbLeagueData.map(league => league.get({plain: true}));
      const pageTitle = {pageTitle: 'All Leagues'}
      console.log(leagues)
      res.render('leagues', {
        leagues,
        pageTitle,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/league/:id', withAuth, (req, res) => {
  League.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id', 'name'
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
      League.findAll({
        attributes: ['name', 'id'],
      })
      .then(allLeaguedata => {

      
      // serialize the data
      const teams = dbLeagueData.get({ plain: true });
      const pageTitle = {pageTitle: 'All League Teams'};
      const leagues = allLeaguedata.map(league => league.get({ plain: true }) );

      // pass data to template
      res.render('single-league', {
        teams,
        leagues,
        pageTitle,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  })
});


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/leagues');
    return;
  }
  res.render('signup');
});

router.get('/team/:id', withAuth, (req, res) => {
    Team.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
          'id',
          'team_name',
          'manager',
          'league_id'
      ],
      include: [
        {
          model: Player,
          attributes: ['id', 'player_name'],
          include: [ {
            model: Game,
            attributes: [              
            'ab',
            'hits',
            'bb',
            'strikeouts',
            'rbi',
            'rs',
            'sb',
            'innings',
            'earned_runs',
            'hitsGiven',
            'k',
            'walks']
          }]
        },
        {
          model: League,
          attributes: [
            'name'
          ]
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No team found with this id' });
          return;
        }
        League.findAll({
          attributes: ['name', 'id'],
        })
        .then(allLeaguedata => {
        // serialize the data
        const players = dbPostData.get({ plain: true });
        const pageTitle = {pageTitle: 'Team Info'}
        const leagues = allLeaguedata.map(league => league.get({ plain: true }) );
        console.log(players)
        

        // pass data to template
        res.render('team', {
          players,
          leagues,
          pageTitle,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    })
  });

  router.get('/player/:id', withAuth, (req, res) => {
    Player.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
          'player_name',
          'team_id'
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
              'sb',
              'innings',
              'earned_runs',
              'hitsGiven',
              'k',
              'walks',
              'player_id',
              'average',
              'obp',
              'era'
          ]
        },
        {
          model: Team,
          attributes:[
            'team_name',
            'league_id'
          ],
          include: [{
            model: League,
            attributes: [
              'name'
            ]
          }
          ]
        }

      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No player found with this id' });
          return;
        }
        League.findAll({
          attributes: ['name', 'id'],
        })
        .then(allLeaguedata => {
  
        // serialize the data
        const games = dbPostData.get({ plain: true });
        const pageTitle = {pageTitle: 'Player Stats'}
        const leagues = allLeaguedata.map(league => league.get({ plain: true }) );
        console.log(games)
        // pass data to template
        res.render('player', {
          games,
          leagues,
          pageTitle,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    })
  });

module.exports = router;