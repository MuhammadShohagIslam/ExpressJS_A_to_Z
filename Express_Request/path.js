/**
        *** req.path ***
            => req.path is a property of request object through which
            we can find the path part of the request URL
 */
const pathFun = (req, res) => {
    res.send(`${req.path} is request URL path`);
};

module.exports = pathFun;
