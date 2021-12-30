/*
 *** Router Level Middleware ***
 */
const express = require('express');

const app = express();
const port = 5050;
const appRouter = express.Router(); // create a sub-app with Router()

// router level middleware
const routerLevelMiddleware = (req, res, next) => {
    console.log(`${req.originalUrl}- ${req.hostname} - ${req.ip} - ${req.path}`);
    req.requestTime = new Date().toLocaleTimeString();
    next();
};

appRouter.use(routerLevelMiddleware);

appRouter.get('/dashboard', (req, res) => {
    let responseText = 'This is Router level Middleware';
    responseText += `<small> Requested at: ${req.requestTime}`; // req.requestTime comes from middleware
    res.send(responseText);
});

app.use('/admin', appRouter);

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
