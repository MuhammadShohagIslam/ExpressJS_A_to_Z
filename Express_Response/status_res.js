/*
    *** Status Code Response ***
        => The res.status() method sets the HTTP status for
        the response

        => It is a chainable alias of Node's response.statusCode
*/
const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    // res.status(200).end('The Request Succeeded');
    // res.status(201).end('The request succeeded, and a new resource was created as a result');
    // res.status(400).end('Bad Request');
    // res.status(404).end('Not Found');
    res.status(500).end('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
