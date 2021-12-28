/*
    *** req.secure ***
        => A boolean property that is true if a protocol is a 
        https, otherwise is false if a protocol is a http
*/

const express = require("express");
const app = express();

app.get('/', function (req, res) {
    console.log(req.secure);
    res.end();
})

app.listen(5050, ()=>{
    console.log('Listenning to the 5050 port')
})