const router = require('express').Router();


const userRoutes = require('./user-routes.js');
const gameRoutes = require('./game-routes');
const leagueRoutes = require('./league-routes');
const playerRoutes = require('./player-routes');
const teamRoutes = require('./team-routes');



// router.use('/games', gameRoutes);
router.use('/leagues', leagueRoutes);
// router.use('/players', playerRoutes);
router.use('/teams', teamRoutes);
router.use('/users', userRoutes);

module.exports = router;