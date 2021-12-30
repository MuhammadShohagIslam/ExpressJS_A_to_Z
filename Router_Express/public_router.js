// importing express.js
const express = require('express');

// creating public router
const publicRouter = express.Router();

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
// router.all() method, it's matche all HTTP  methods
publicRouter.all('*', customeMiddleware, loadUser); // customeMiddleware & loadUser work with all HTTP method.

publicRouter.get('/', (req, res) => {
    console.log(req.method);
    res.send('This is a public router');
    res.end();
});

publicRouter.post('/', (req, res) => {
    console.log(req.method);
    res.send('This is a public router through using post method');
    res.end();
});

// exporting module
module.exports = publicRouter;
