/*
    *** res.json() ***
        => res.json() method sends a JSON response.
*/
const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    // create JSON Array
    const myJSONResponse = [
        {
            name: 'Muhammad Shohag Islam',
            age: 24,
        },
        {
            name: 'Muhammad Sojib Rahman',
            age: 22,
        },
    ];
    res.json(myJSONResponse); // send json response
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
