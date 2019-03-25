const http = require('http');
const port=process.env.PORT || 3000;

const express = require('express');
const app = express();


app.get('/', function(req, res) {
	res.send('Welcome!');
});

//const server = http.createServer((req, res) => {
	//res.statusCode = 200;
	//res.setHeader('Content-Type', 'text/html');
	//res.end('<h1>Hello World by Nico</h1><p>How are things? Cool stuff this HEROKU! </p>');
//});

http.createServer(app).listen(3000, function(){
	console.log('Express server listening on port ' + 3000);
});

//server.listen(port,() => {
	//console.log(`Server running at port `+port);
//});
