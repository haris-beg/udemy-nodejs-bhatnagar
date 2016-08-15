'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs'); // Node's file handling module
const path = require('path'); // Node's path handling module

let mimes = {
    '.htm': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.png': 'image/png'
}

function webserver(req, res) {
	// if the route requested is '/' (the root), then serve index.htm,
	// else load the requested file(s)

	let baseURI = url.parse(req.url, true);
    let filepath = __dirname + (baseURI.pathname === '/' ? '/index.htm' : baseURI.pathname);
    
    // check whether the requested resource is accessible or not
    fs.access(filepath, fs.F_OK, error => {
        if (!error) {
            // read and serve the requested file over response
            fs.readFile(filepath, (error, content) => { // callback function
                if (!error) {
                    console.log('Serving: ', filepath);
                    // resolve the content type
                    let contentType = mimes[path.extname(filepath)]; // mimes['.htm'] etc === 'text/html'
                    // Serve the file from the buffer
                    res.writeHead(200, {'Content-type': contentType});
                    res.end(content, 'utf-8');
                }
                else {
                    // Send a 500 (server error) in the response
                    res.writeHead(500);
                    res.end('Server could not find the requested file!');
                }
            });
        }
        else {
            // serve a 404 file not found response
            res.writeHead(404);
            res.end('Content not found!');
        }
    });
    
}

http.createServer(webserver).listen(3000, () => {
	console.log('Web server running on port 3000!');
});