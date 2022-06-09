const router = require('express').Router()



router.get('/', async (req, res) => {
    res.render('main')
})

module.exports = router