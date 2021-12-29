/*
    *** Simple String Response ***
        => This is one kind of response, through which, we can
        send response simple string way data

    *** res.send() => res.send() function basically sends the
    HTTP response. The body parameter can be a string or
    Buffer object aor an array.(geeksforgeeks). It's also
    represents Response Body(Teacher. Rabbil Hasan)

    *** res.end() =>The res.end() function is used to end the
    response process.

    Note That: in this case of simple response, we can use
    either res.send() method or res.end() method
*/
const express = require('express');

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.send('This is a simple string response'); // send response to the http server as a Simple string data
    res.end(); // end the response
});

app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});
