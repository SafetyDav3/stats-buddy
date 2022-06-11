const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.redirect('/')
    }
    next();
};

module.exports = withAuth;