/*
    *** req.get ***
        => Through this method, we can get the specified HTTP
        request header field(case-insensitive match)
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req.get('Content-Type'));
    res.end();
});

app.listen(5050, () => {
    console.log('Listenning to the 5050 port');
});
