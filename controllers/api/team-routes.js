const router = require('express').Router();
const { Player, Team } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Team.findAll({
    attributes: [
      'id',
      'team_name',
      'manager',
      'league_id',
    ],
    order: [['team_name', 'ASC']],
    include: [
      {
        model: Player,
        attributes: ['id', 'player_name', 'team_id'],
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Team.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'team_name',
        'manager',
        'league_id',
    ],
    include: [
        {
            model: Player,
            attributes: ['id', 'player_name', 'team_id'],
        }
      ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No league found with this id' });
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
  Team.create({
    team_name: req.body.team_name,
    manager: req.body.manager,
    league_id: req.body.league_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Team.update(
    {
      team_name: req.body.team_name,
      manager: req.body.manager
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No league found with this id' });
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
  Team.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No league found with this id' });
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
