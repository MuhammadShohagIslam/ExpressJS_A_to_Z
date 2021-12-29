/*
    *** res.append() ***
        => res.download() method send response the specified
            value to the HTTP  response header field.
        => We have to append data with the form of key value
        pair way data
        => The value parameter can be a string ot an array
*/
const express = require('express');

const app = express();
const port = 5050;

// With middleware
// app.use('/', (req, res, next) => {
//     res.append('name', 'Muhammad Shohag Islam');
//     next();
// });

app.get('/', (req, res) => {
    res.append('name', 'Muhammad Shohag Islam'); // set new header
    res.append('age', 24); // set header
    res.status(200).end('This is a header response method');
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
