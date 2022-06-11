const router = require('express').Router();
const { Player, Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Game.findAll({
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
        'walks',
        'player_id'
    ],
    order: [['id', 'ASC']],
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Game.findOne({
    where: {
      id: req.params.id
    },
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
          'walks',
          'player_id'
      ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No game found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Game.create({
      ab: req.body.gameAB,
      hits: req.body.gameHits,
      bb: req.body.gameBB,
      strikeouts: req.body.gameStrikeouts,
      rbi: req.body.gameRBI,
      rs: req.body.gameRS,
      sb: req.body.gameSB,
      innings: req.body.gameInnings,
      earned_runs: req.body.gameEarnedRuns,
      hitsGiven: req.body.gameHitsGiven,
      k: req.body.gameK,
      walk: req.body.gameWalk,
      player_id: req.body.player_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Game.update(
    {
        ab: req.body.ab,
        hits: req.body.hits,
        bb: req.body.bb,
        strikeouts: req.body.strikeouts,
        rbi: req.body.rbi,
        rs: req.body.rs,
        innings: req.body.innings,
        earned_runs: req.body.earned_runs,
        hitsGiven: req.body.hitsGiven,
        k: req.body.k,
        walk: req.body.walk,
        player_id: req.body.player_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No game found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Game.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No game found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
