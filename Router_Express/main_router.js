// importing express.js
const express = require('express');

const app = express();
const port = 5050;

// importing custome router or sub router
const publicRouter = require('./public_router');
const adminRouter = require('./admin_router');
const routeRouter = require('./route_router');
const blogRouter = require('./param_router');

// using sub-router with app
app.use('/admin', adminRouter);
app.use('/profile', routeRouter);
app.use('/blog', blogRouter);
app.use('/', publicRouter);

app.listen(port, () => {
    console.log('Listening on the 5050');
});
