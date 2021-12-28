/*
    *** req.body ***
        => Contains key-value pairs of data submitted in the request body.
*/

const express = require('express');

const app = express();

app.use(express.json()); // for parsing application/json

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(5050, () => {
    console.log('Listenning to the 5050 port');
});
