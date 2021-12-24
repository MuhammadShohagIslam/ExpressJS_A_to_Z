/*
    *** Express.js Function ***
        => The express() function is a top-level function exported by the express module.
        => This function creates an Express application.
*/
const express = require('express');

const app = express();
const port = 5050;
/*
    *** express.json([options]) ***
        => This is a built-in middleware function in Express.
        => It parses incoming requests with JSON payload and is based on body-parser
        => Through this middleware, we can handle JSON data
        => Through this middleware, we can get JSON data to form of Object
 */
// app.use(express.json());

/*
    *** express.text([options]) ***
    => This is a built0in middleware function in Express.
    => It's returns middleware that parses all bodies as a
    string and only looks at request where the Content-Type header matches the type option.
    => Through this middleware, we can get Text data to form of String
*/
// app.use(express.text());

/*
    *** express.urlencoded([options]) ***
        => It's a built-in middleware function in Express.
        => It returns middleware that only parses urlencoded bodies and
            only looks at requests where the Content-Type header matches the type option
        => Through this middleware, we can get Text data to form of Object
*/
// app.use(express.urlencoded());

/*
    *** express.raw([options]) ***
        => This is a built-in middleware function in Express.
        => It returns middleware that parses all bodies as a Buffer
        and only looks at requests where the Content-Type header matches the type option.
        =>Through this middleware, we can get Buffer data to form of Object
*/
// app.use(express.raw());

/*
        *** express.static(root, [option]) ***
        =>It is a middleware function which servers static files and is based on server-static
        => Through this middleware function, we can be showed our any data
        like text, html whatwever we we want

 */
// const option = {
//     index: 'home.html',
// };
// app.use(express.static(`${__dirname}/public/`, option));

/*
    *** express.Router([options]) ***
    => It creates a new router object
    => We can add middleware and HTTP method routes like
    get, put, post and so on9 to router just like an application

*/

const router = express.Router();
app.use(router);

router.get('/', (req, res) => {
    res.send('This is a Home Page');
});

// app.post('/', (req, res) => {
//     console.log(req.body.name); // we can extract data from objecct it is object.
//     console.log(typeof req.body); // return object
//     res.send('This is Home page where we are taking request');
// });

// app.post('/', (req, res) => {
//     // const myobj = JSON.parse(req.body);
//     // console.log(myobj.name);
//     console.log(req.body);
//     console.log(typeof req.body); // return string
//     res.send('This is Home page where we are taking request');
// });

// app.post('/', (req, res) => {
//     console.log(req.body);
//     console.log(typeof req.body); // return object
//     res.send('This is Home page where we are taking request');
// });

// app.post('/', (req, res) => {
//     console.log(req.body); // return Buffer Data
//     console.log(req.body.toString()); // return Buffer Data
//     console.log(typeof req.body); // return object
//     res.send('This is Home page where we are taking request');
// });

router.post('/', (req, res) => {
    res.send('This is Home page where we are taking request');
});

app.listen(port, () => {
    console.log(`Express Function Chapter is Listeninig with http://localhost:${port}`);
});
