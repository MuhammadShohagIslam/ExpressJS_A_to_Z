/*
    *** req.query ***
        => This property is an object containinig a property 
        for each query string paramater in the route.
        => It's return an pure object.
*/
const express = require("express");
const app = express();


app.get('/user/:id', function (req, res) {
    console.log(req.query); // return an object
    res.end();
})

app.listen(5050, ()=>{
    console.log('Listenning to the 5050 port')
})