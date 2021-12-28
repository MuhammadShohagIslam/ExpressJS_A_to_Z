/*
    *** req.router ***
        => Through this parameter, we can get full of 
        about route as a object
*/
const express = require("express");
const app = express();


app.get('/user/:id', function (req, res) {
    console.log(req.route); // return an object
    res.end();
})

app.listen(5050, ()=>{
    console.log('Listenning to the 5050 port')
})