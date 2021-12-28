/*
    *** req.cookies ***
        => through this properties, we can get cookeies from 
        the client. Where we can get an object
*/
const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    console.log(req.cookies) // return an obect 
    res.end()
})

app.listen(5050, ()=>{
    console.log('Listenning to the 5050 port')
})