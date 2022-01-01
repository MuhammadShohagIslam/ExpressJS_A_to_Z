/*
 *** Synchronous Error Handling ***
    => By default, Express.js are handling all synchronous code
    => The Error handling of Express.js Middleware, it is last middleware of express.js
        it is seting invisible default error handling middleware
    => It must be a last middleware
    => If any client hit any url which is not exited, in this case,
        Server gives us 404 error

    => if one time response go into header, we can send response again beacuse it is doing
        one time.
 */

const express = require('express');

const app = express();
// app.get('/', (req, res) => {
//     res.send('Asynchronous Error Handling');
//     res.end();
// });

app.get('/', (req, res) => {
    for (let i = 0; i <= 5; i++) {
        if (i === 5) {
            next('There was a error');
        } else {
            res.write('a');
        }
    }
    res.end();
});

// 404 Error handler
// app.use((res, req, next) => {
//     next('Request url is not found'); // it is going custome error section with error
// });

// creating last middleware
const errorHandling = (err, req, res, next) => {
    // if header set already, we must to handle this way
    if (res.headersSent) {
        next('There was a problem'); // it is going to the express default error handling
    } else if (err.message) {
        res.status(500).send(err.message); // this error comes from server
    } else {
        res.status(500).send('This is a custome error'); // custome error
    }
};

app.use(errorHandling);

app.listen(5050, () => {
    console.log('Listening on the 5050');
});
