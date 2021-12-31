/*
        *** Error Handling Middleware ***
            => Error Handling refers to how express catches
            processes error that occurs both synchronously and
            asynchronously
            => Express comes with a default error handler so
            you don’t need to write your own to get started.

 */
const express = require('express');

const app = express();
const port = 5050;

// creating middleware
const errorMiddleware = (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    // throw new Error('This was a error'); // express will catch this on its own
    next('This was a error'); // pass errors to express
};

// associating to app errorMiddleware
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('This is a error router');
});

// handling error middleware
const errorHandling = (err, req, res, next) => {
    console.log(err); // return error message which one we provide into next()
    console.log(err.message); // return error which comes from throw new Error()
    res.status(500).send('Something broke!');
};

// associating errorHandling middleware to app
app.use(errorHandling);

app.listen(port, () => {
    console.log(`Listening on the ${port}`);
});
