# Ultima 7 Tweets

This is a twitter bot that tweets out random Ultima 7 quotes. You can see it in action on twitter as [@Ultima7Tweets](http://twitter.com/ultima7tweets). It's pretty simple in that it relies on cron to schedule, and just tweets out lines from a file, one after the other every time that it is run.

* You'll need a Twitter consumer key which you can get at http://dev.twitter.com. 
* You'll also need to create a new Twitter application which should be set up to Read+Write tweets. 
* You'll also need an access key to tweet, which you can create from the application keys page.
* If you'll be tweeting from a different account than the one that owns the application, you can use get_tokens.js to authorize. However, you'll need to set the callback URL to http://127.0.0.1:3000/ to read the access key from the cookie. Then, add your consumer key and secret to config.js and run get_tokens.js - you will be asked to authorize the app and the be redirected to a page you can get the access keys from.

If that all seems complex, it kind of is.

Finallly, just run tweet.js to send out a tweet. If all went well, then good on you!