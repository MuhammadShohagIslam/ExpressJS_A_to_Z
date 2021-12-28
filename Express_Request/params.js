/*
    *** req.params ***
        => through req.params property, we can get an object
        containing properties.Into object, parameter value is string

*/
const express = require('express');

const app = express();

app.get('/user/:id', (req, res) => {
    console.log(req.params); // return id number as a string
    console.log(req.params.id); // we can extract beacuse it is object
    res.end();
});

app.listen(5050, () => {
    console.log('Listenning to the 5050 port');
});
