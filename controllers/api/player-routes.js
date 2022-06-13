const router = require("express").Router();
const { Player, Game } = require("../../models");
const withAuth = require("../../utils/auth");
const badWords = require("../../utils/bad-words");

router.get('/', withAuth, (req, res) => {
  Player.findAll({
    attributes: ["id", "player_name", "team_id"],
    order: [["player_name", "ASC"]],
    include: [
      {
        model: Game,
        attributes: [
          "id",
          "ab",
          "hits",
          "bb",
          "strikeouts",
          "rbi",
          "rs",
          "innings",
          "earned_runs",
          "hitsGiven",
          "k",
          "walks",
          "player_id",
        ],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
  Player.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "player_name", "team_id"],
    include: [
      {
        model: Game,
        attributes: [
          "id",
          "ab",
          "hits",
          "bb",
          "strikeouts",
          "rbi",
          "rs",
          "innings",
          "earned_runs",
          "hitsGiven",
          "k",
          "walks",
          "player_id",
        ],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No player found with this id",
        });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  if (badWords(req.body.player_name)) {
    res.status(400).send("No bad words allowed!");
    return;
  }

  Player.create({
    player_name: req.body.player_name,
    team_id: req.body.team_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Player.update(
    {
      player_name: req.body.player_name,
      team_id: req.body.team_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No player found with this id",
        });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Player.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({
          message: "No player found with this id",
        });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
