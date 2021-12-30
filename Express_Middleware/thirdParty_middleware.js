/*
 *** Third-party Middleware ***
 */
const express = require('express');

const app = express();
const port = 5050;
const bodyParser = require('body-parser');

// parse application/json data through body-parser middleware
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser hrough body-parser middleware
app.use(bodyParser.urlencoded());

// POST /login gets JSON bodies
app.post('/login', (req, res) => {
    const jsonData = req.body;
    const stringData = JSON.stringify(jsonData);
    res.send(stringData); // return string data from Json data
});

// POST /login gets urlencoded bodies
app.post('/log', (req, res) => {
    const { name } = req.body;
    res.end(name);
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
