var express = require('express');
var app = express();
var path = require('path');

app.set('port',3000);

app.use(express.static(path.join(__dirname,'public')));

app.get('/json', function(req, res){
	console.log('Get the json');
	res
		.status(200)
		.json( {"jsonData" : true});
});

app.get('/file', function(req, res){
	console.log('Get the file');
	res
		.status(200)
		.sendFile(path.join(__dirname, 'app.js'));
});


var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happends on port '+ port );
});


console.log('this is the first')