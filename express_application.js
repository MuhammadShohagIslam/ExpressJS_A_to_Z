/*
    *** Application ***
        => The app object conventionally denotes the Express application
        => Create it by calling the top-level express() function exported by the express module.

*/
const express = require('express');

const app = express();
const port = 5050;
/*
    *** app.locals ***
        => The app.locals object has properties that are local variables within the application.
        => The value of app.locals properties persist throughout the life of the application
        => We can access local variables in templates rendered within the application
        => This is useful for providing helper function to templates,
        as well as application-level data.
*/
// app.locals.title = 'This is a local variable of express js';

/*
    *** app.mountpath ***
        =>The app.mountpath property contains one or more path patterns
        on which a sub-app was mounted
        => If a sub-app is mounted on multiple path patterns,
        app.mountpath returns the list of patterns

*/
// const admin = express(); // sub-app which mab be used for handling the request to a route
// const secret = express(); // another sub-app

// admin.get('/', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Admin Home Page');
// });

// secret.get('/', (req, res) => {
//     console.log(secret.mountpath);
//     res.send('Admin Secret');
// });
// admin.use('/secret', secret);
// app.use(['/admin', '/manager'], admin);

/*
    *** app.on('mount', callback(parent)) ***
        => The mount event is fired on a sub-app, when it is mounted on a parent app.
        => The parent app is passed to the callback function
*/
// const admin = express();
// admin.on('mount', (parent) => {
//     console.log('Admin Mounted');
//     console.log(parent); // we can handle parent app here
// });

// admin.get('/', (req, res) => {
//     res.send('Admin Homepage');
// });
// app.use('/admin', admin);

/*
        *** app.all(path, callback[,callback...]) ***
            => app.all() is a universal method through which we can be worked with the
            all kind of HTTP method ike get(), post(), put(), delete(), update(), and so on.

 */
// app.all('/', (req, res) => {
//     res.send('This is universal method');
// });

/*
    *** app.delete(path, callback[, callback ...]) ***
        => app.delete() method delete the specified resourcces if the match
        or applied the method successfully
*/
// app.delete('/delete', (req, res) => {
//     res.send('Delete Method Work Successfully');
// });

/*
    *** app.disable(name) or enabled***
        => through this method, we can disable any property (app setting property)of express js app.

    *** app.enable() or disabled => we can enable any kind of property of app setting
    express js application
*/
// app.disabled('case sensitive routing');
// app.enable('case sensitive routing');
// app.disable('case sensitive routing');
// app.enabled('case sensitive routing');

/*
    *** app.get(name) ***
        => returns the value of name app setting, where name is one of the string
        in the express js app settings table.
*/
// app.set('title', 'We are set new Title in the application');
// app.get('title');

/*
    *** app.param(name, callback) ***
        => app.param() is one kind of important method through which
        we can hold parmaeter from the URL, the we can handle.
*/
// in the case of single paramater
// app.param('id', (req, res, next, id) => {
//     console.log('Called Only Once');
//     const userDetails = {
//         userID: id,
//     };
//     req.userDetails = userDetails;
//     next();
// });
// app.param(['id', 'page'], (req, res, next, value) => {
//     console.log(value);
//     next();
// });
// app.get('/user/:id/:page', (req, res) => {
//     res.send(`This is Home Page For Express Application. ${app.locals.title}`);
//     res.end();
// });

/*
    *** app.path() ***
        => If we want to get any path from the app, we can use this method.
*/
// const blog = express();
// app.use('/blog', blog);
// console.log(app.path());
// console.log(blog.path());

// blog.get('/', (req, res) => {
//     res.send(`This is Blog Page For Express Application. ${app.locals.title}`);
//     res.end();
// });

/*
    *** app.router(path) ***
        => If we want to avoid duplicate router names, we can use it
 */
// app.route('/event')
//     .get((req, res) => {
//         res.send(`This is Home Page For Express Application. ${app.locals.title}`);
//         res.end();
//     })
//     .post((req, res) => {
//         res.send(`This is Home Page For Express Application. ${app.locals.title}`);
//         res.end();
//     })
//     .all((req, res) => {
//         res.send(`This is Home Page For Express Application. ${app.locals.title}`);
//         res.end();
//     });
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(port, () => {
    console.log(`Express Application Chapter is Listeninig with http://localhost:${port}`);
});
