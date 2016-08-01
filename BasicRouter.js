'use strict';
const http = require('http');

function router(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end('<h1>Hello Router!</h1>');
}

http.createServer(router).listen(3000, () => {
	console.log('Server running on port 3000');
});
