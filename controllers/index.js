const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeBase-routes')
const testRoutes = require('./test')

// router.use('/', homeRoutes)
router.use('/api', apiRoutes);
router.use('/test', testRoutes)

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;