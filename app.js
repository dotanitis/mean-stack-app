var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

app.set('port',3000);

// Middlewere interact with request before the response

app.use(function(req,res,next) {
	console.log(req.method, req.url);
	next();
});

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended : false}));

app.use('/api',routes)


var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happends on port '+ port );
});


console.log('this is the first')