/*
    *** req.originalUrl ***
        => req,originalUrl is a property which retains the origianl request url.
        => If our client is hitting a URL in the original and we want to keep instance in memory,
        we will use the originalUrl.
*/
const originalURL = (req, res) => {
    console.log(req.originalUrl);
    res.send(`'${req.originalUrl}' is a original url`);
};

const subOriginalURL = (req, res) => {
    /*
            Note that: in the case of sub app, we use originalUrl property,
            otherwise we can not get original url form client,
            Do not use req.url
    */
    console.log(req.originalUrl); // return /sub/abc
    console.log(req.url); // return /abc
    res.send(`'${req.originalUrl}' is a original url from sub app`);
};
module.exports = {
    originalURL,
    subOriginalURL,
};
