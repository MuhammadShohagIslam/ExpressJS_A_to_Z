/*
        *** req.baseUrl ***
            => req.baseUrl is a request property through which
            we can get baseUrl path of this route app
            => the base on which the route is mounted is called baseUrl.
 */
const baseURL = (req, res) => {
    console.log(req.baseUrl);
    res.send('This is baseURL path of this route');
};

// sub-app
const subApp = (req, res) => {
    console.log(req.baseUrl);
    res.send('This is a baseURL');
};

module.exports = {
    baseURL,
    subApp,
};
