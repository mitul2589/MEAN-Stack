var express = require('express');
var path = require('path');
var PassportRouter = express.Router();
var Counter = require(path.join(__dirname + '/../app/models/users'));

var passportrouter = function (passport) {
    PassportRouter.get('/login', function (req, res) {
        // Display the Login page with any flash message, if any
        console.log("login -------- cbgfhgfhfhgfy");
        res.sendFile(path.join(__dirname + '/../login.html'));
    });

    /* Handle Login POST */
    PassportRouter.post('/login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    /* GET Registration Page */
    PassportRouter.get('/signup', function (req, res) {
        console.log("Signup -------- cbgfhgfhfhgfy");
        res.sendFile(path.join(__dirname + '/../signup.html'));
    });

    /* Handle Registration POST */
    PassportRouter.post('/signup', passport.authenticate('signup', {
        successRedirect: '/login',
        failureRedirect: '/login',
        failureFlash: true
    }));

    PassportRouter.get('/signout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    return PassportRouter;
};


module.exports = passportrouter;