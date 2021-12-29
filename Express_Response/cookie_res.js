/*
    *** res.cookie(name, value [, options]) ***
        => res.cookie() method to set cookie name to value
        => The value paramerter may be a string or object converted to JSON
*/
const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.cookie('name', 'Muhammad Shohag Islam'); // set cookie
    res.cookie('age', 'Muhammad Shohag Islam'); // set cookie
    res.status(200).end('Sets Cookie');
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
