/*
    *** router.param(name, callback) ***
        => Through router.param(), we can work with parameter
        where as a parameter has two parts.
            * name ( name of the parameter)
            * callback is the callback function
            => this callback function are called once.

    *** The parameters of the callback function are:
        => req --- the request object
        => res --- the response obect
        => next --- indicating the next middleware function
        => value --- the value of the name parameter

*/
// importing express
const express = require('express');

// creating custome router
const blogRouter = express.Router();

/*
    *** A param callback will be called once in a request-
    response cycle, even if the parameter is matched in
    multiple routes.
*/
// creating param method
blogRouter.param('id', (req, res, next, id) => {
    console.log('CALLED ONLY ONCE');
    req.id = id;
    next();
});

// creating another  method
blogRouter.get('/post/:id', (req, res, next) => {
    console.log(req.id);
    console.log('although this matches');
    next();
});

/*
 *** Passing function to router.param() ***
 */

// blogRouter.param((param, option) => (req, res, next, id) => {
//     if (id === option) {
//         console.log(option);
//         console.log(param);
//         req.id = id;
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// });

// // using the customized router.param()
// blogRouter.param('id', '12');

// creating blog router
blogRouter.get('/post/:id', (req, res) => {
    console.log(req.id);
    res.send('This is a blog router');
    res.end();
});
// exporting module
module.exports = blogRouter;
