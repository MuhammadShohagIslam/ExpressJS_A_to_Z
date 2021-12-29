/*
    *** res.cookie(name, value [, options]) ***
        => res.cookie() method to use clears the cookie
        specified by name
*/
const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.clearCookie('name'); // clear name cookie
    res.clearCookie('age'); // clear name of age cookie
    res.status(200).end('Clear Cookie');
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
