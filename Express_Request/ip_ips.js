/*
    *** req.ip property ***
        => req.path is a property of request object through which
            we can find the remote IP address of the request
    *** req.ips property ***
        =>When the trust proxy setting does not evaluate to false,
        this property contains an array of IP addresses specified
        in the X-Forwarded-For request header. Otherwise, it contains an empty array.
*/

const ipFun = (req, res) => {
    res.send(`'${req.ip}' is a ip address app`);
};

const ipsFun = (req, res) => {
    res.send(`'${req.ips}' is a ips address app`);
};
module.exports = {
    ipsFun,
    ipFun,
};
