const router = require('express').Router()



router.get('/', async (req, res) => {
    res.render('home')
})

router.get('/leagues', async (req, res) => {
    res.render('league')
})

router.get('/login', async (req, res) => {
    res.render('login')
})

// router.get('/', async (req, res) => {
//     res.render('main')
// })



module.exports = router