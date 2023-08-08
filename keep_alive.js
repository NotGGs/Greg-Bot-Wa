// create keep_alive file then

var http = require('http');
http.createServer(function (req, res) {
	res.write("Greg Bot Alive");
	res.end();
}).listen(8080);

// open main.js then add