var util = require('util'),
    twitter = require('twitter'),
		config = require('./config'),
		twit = new twitter( config ),
		express = require('express'),
		app = express()

app.get('/', function(req,res) {
	if ( req.headers.cookie && req.headers.cookie.match(/twauth/) ) {
		res.end( util.inspect( req.headers.cookie ) );
	} else {
		res.redirect('/twauth');
	}
});

app.get('/twauth', twit.login());

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
		console.log('Maker sure your callback URL is set to http://127.0.0.1:3000/');
});
