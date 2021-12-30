/*
 *** Application Level Middleware ***
 */

const express = require('express');

const app = express();
const port = 5050;

const appMiddleware = (req, res, next) => {
    console.log(`${req.originalUrl}- ${req.hostname} - ${req.ip} - ${req.path}`);
    // can change req object, we can put anything into request object
    req.requestTime = new Date().toLocaleTimeString();
    next();
};
app.use(appMiddleware);

app.get('/', (req, res) => {
    let responseText = 'This is response Text';
    responseText += `<small>Requested at: ${req.requestTime}</small>`; // req.requestTime comes from middleware
    res.send(responseText);
});

app.post('/post', (req, res) => {
    res.send('This is about middleware parctice lesson chapter1');
    res.end();
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
