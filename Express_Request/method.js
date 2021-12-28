/*
    *** req.method ***
        => Through this parameter, we can get method name
        which method is used this router as UpperCase Letter
        like GET, POST ...
*/
const express = require('express');

const app = express();

app.get('/user/:id', (req, res) => {
    console.log(req.method); // return GET method
    res.end();
});

app.listen(5050, () => {
    console.log('Listenning to the 5050 port');
});
