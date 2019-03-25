module.exports = function(app) {

	app.get('/', function(req, res) {
		// Send a plain text response
		res.sendFile('game.html' , { root : __dirname});
	});

  app.get('/jquery.min.js', function(req, res) {
		// Send a plain text response
		res.sendFile('jquery.min.js' , { root : __dirname});
	});


};
