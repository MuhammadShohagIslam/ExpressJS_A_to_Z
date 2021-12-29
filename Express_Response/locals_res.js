/*
    *** res.locals() ***
        => res.locals() method an object that contains
        response local variables scoped to the request
        => Available only for the views rendering
*/
const express = require('express');

const app = express();
const port = 5050;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.locals.name = 'Muhammad Shohag Islam';
    res.locals.age = 23;
    console.log(res.locals.age);
    res.end();
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
