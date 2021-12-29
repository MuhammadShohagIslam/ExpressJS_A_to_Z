/*
    *** res.format() ***
        => res.format() method performs content-negotiation on
        the Accept HTTP header on Request Object, when present
*/
const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.format({
        'text/plain': function () {
            res.send('This is a text');
        },
        'text/html': function () {
            res.send('<h1>This is html text</h1>');
        },
        'application/json': function () {
            res.send({ name: 'Muhammad Shohag Islam' });
        },
        default() {
            res.status(406).end('Not Acceptable');
        },
    });
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
