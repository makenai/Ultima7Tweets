var config = require('./config'),
    twitter = require('twitter'),
		twit = new twitter( config );

twit.updateStatus('Testing one two', function(data) {
	console.log( data );
});
