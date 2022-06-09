const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.redirect('/login')
    }
    next();
};

module.exports = withAuth;