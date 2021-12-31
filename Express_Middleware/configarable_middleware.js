/* eslint-disable no-template-curly-in-string */
/*
 *** Configarable Middleware ***
 */
const express = require('express');

const app = express();
const port = 5050;

// creating configarable function
const configMiddleware = (obj) => (res, req, next) => {
    if (obj.option) {
        next();
    } else {
        throw new Error('Something Broken!');
    }
};

// use configarable function with passed a value
app.use(configMiddleware({ option: false }));

app.get('/', (req, res) => {
    res.send('This is a configarable middleware router');
});

// error handling middleware
const errorHandling = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send(err.message);
};

// using error handling middleware to app
app.use(errorHandling);

app.listen(port, () => {
    console.log(`Listening on the ${port}`);
});
