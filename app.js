import express from 'express';
import request from 'request';
import colors from 'colors';
const port = process.env.PORT || 1337;
let app = express();

app.listen(port, err => {
    if (err) { console.error(err.red); } else {
        console.log(`http://localhost:${port}...`.green);
    }
});
