/*
    *** req.accepts ***
        => Checks if the specified content types are acceptable,
        based on the request's accept HTTP header field.
        => The method returns the best match, or if none of 
        the specified content types is acceptable.
        => returns false (in which case, the application 
            should respond with 406 "Not Acceptable").
*/

const express = require("express");
const app = express();

app.use(express.json());

app.post('/', function (req, res) {
    if (req.url === '/'){
        if (req.accepts('html')){
            res.render('index.ejs')
        }else if (req.accepts('application/json')){
            res.json(res.body)
        }else {
            res.end("Page is not Found")
        }
    }
})

app.listen(5050, ()=>{
    console.log('Listenning to the 5050 port')
})