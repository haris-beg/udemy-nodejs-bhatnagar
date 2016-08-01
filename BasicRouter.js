'use strict';
const http = require('http');
const url = require('url');

function router(req, res) {
	let baseURI = url.parse(req.url, true);
	console.log('Requested route is: ', baseURI);
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end('<h1>Hello Router!</h1>');
}

http.createServer(router).listen(3000, () => {
	console.log('Server running on port 3000');
});
