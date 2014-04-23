var config = require('./config'),
    twitter = require('twitter'),
		Lazy = require('lazy'),
		fs = require('fs'),
		storage = require('node-persist'),
		twit = new twitter( config )

storage.initSync()

function tweetLine( lineNum ) {
	new Lazy( fs.createReadStream('./ultima7_tweets.txt') )
		.lines
		.skip( lineNum )
		.take(1)
		.map(String)
		.forEach(function(tweet) {
			twit.updateStatus( tweet, function(data) {
				console.log( data );
			});
	})
}

var counter = storage.getItem('counter') || 0
tweetLine( counter )
storage.setItem('counter', counter + 1)
