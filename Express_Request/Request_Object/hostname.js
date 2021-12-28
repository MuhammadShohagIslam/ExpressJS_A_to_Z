/**
        *** req.hostname ***
            => req.path is a property of request object through which
            we can find the hostname derived from the host HTTP header.
 */
const hostnameFun = (req, res) => {
    res.send(`'${req.hostname}' is request host name`);
};

module.exports = hostnameFun;
