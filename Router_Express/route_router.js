/*
    *** Route Router ***
    => Through router.route(), we can be return an instance of
    a single route which we can then use to the handle HTTP
    verbs with optional middleware
    => It is avoid duplicate route naming and typing errors
 */
// importing express.js
const express = require('express');

// creating public router
const routeRouter = express.Router();

// creating middleware
const customeMiddleware = (req, res, next) => {
    console.log('I am a custome middleware');
    next();
};

// creating another middleware
const loadUser = (req, res, next) => {
    console.log('I am a load user middleware');
    next();
};

// creating route
routeRouter
    .route('/user')
    .all(customeMiddleware, loadUser)
    .get((req, res) => {
        console.log('This is a Route  Router for user');
        res.send('This is a Route  Router for user');
        res.end();
    })
    .post((req, res) => {
        console.log('This is a login for user');
        res.send('This is a login for user');
        res.end();
    });

// exporting module
module.exports = routeRouter;
