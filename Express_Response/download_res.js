/*
    *** res.download() ***
        => res.download() method to transfers the file at
        path as an "argument".
        => Usually, browsers will prompt the use for download.
*/
const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.download(`${__dirname}/file/pic.jpg`); // send response as a file, which we can download.
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
