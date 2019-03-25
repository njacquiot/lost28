const http = require('http');
const port=process.env.PORT || 3000;

const express = require('express');
const app = express();

let routes = require('./routes')(app);



app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
