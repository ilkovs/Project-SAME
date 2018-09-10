var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
    app.get('/signup', authController.signup);
    app.get('/', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/makeplan',
        failureRedirect: '/signup'
    }
    ));
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/logout', authController.logout);
    app.post('/', passport.authenticate('local-signin', {
        successRedirect: '/makeplan',
        failureRedirect: '/'
    }
    ));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
}