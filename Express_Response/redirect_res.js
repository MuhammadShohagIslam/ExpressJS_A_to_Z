/*
    *** res.redirect([status,] path) ***
        => res.redirect() method redirect one to another with
        specified status
*/
const express = require('express');

const app = express();
const port = 5050;

// redirect with status
// app.get('/bangladesh', (req, res) => {
//     res.redirect(200, 'http://localhost:5050/turkey');
// });

// redirect without status code
app.get('/bangladesh', (req, res) => {
    res.redirect('http://localhost:5050/turkey');
});

app.get('/turkey', (req, res) => {
    res.send('I live in Turkey Now');
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
