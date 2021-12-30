// importing express.js
const express = require('express');

// creating public router
const adminRouter = express.Router();

adminRouter.get('/dashboard', (req, res) => {
    console.log('This is a Dashboard Router');
    res.send('This is a Dashboard Router');
    res.end();
});

adminRouter.get('/login', (req, res) => {
    console.log('This is a login router');
    res.send('This is a login router');
    res.end();
});

// exporting module
module.exports = adminRouter;
