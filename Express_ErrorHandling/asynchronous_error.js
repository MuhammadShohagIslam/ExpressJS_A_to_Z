/*
 *** Asynchronous Error Handling ***
 */
const express = require('express');
const fs = require('fs');

const app = express();

// asynchronous error handling
app.get('/', [
    (req, res, next) => {
        fs.readFile(`${__dirname}/files/doc.txt`, (err, data) => {
            res.send(data);
            next(err); // it is going directly to the custome error handler
        });
    },
    (req, res, next) => {
        // this error to be handle by the express.js error handler beacuse it is synchronous
        console.log(a);
    },
]);

// app.get('/', (req, res, next) => {
//     let a = '';
//     try {
//         for (let i = 0; i <= 10; i++) {
//             a += i;
//         }
//         console.log(b);
//     } catch (err) {
//         next(err);
//     }
//     res.send(a);
// });

// another middleware
// it can not calling beacause above middlware send error to the custome error
app.use((req, res, next) => {
    console.log('I am not calling');
    res.end();
    next();
});

// custome error handler
const errorHandling = (err, req, res, next) => {
    if (res.headersSent) {
        next('This is a error'); // it is going to the default express.js error handler
    } else if (err.message) {
        res.status(500).send(err.message); // this error comes from server
    } else {
        console.log('b');
        res.status(500).send('This a custome error'); // this error is custome error message
    }
};

app.use(errorHandling);

app.listen(5050, () => {
    console.log('Listening on the 5050');
});
