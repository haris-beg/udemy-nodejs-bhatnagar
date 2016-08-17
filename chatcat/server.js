'use strict';
const express = require('express');
const app = express(); // creates an instance of an express app

app.set('port', process.env.PORT || 3000);

let helloMiddleware = (req, res, next) => {
	req.hello = "Hello! This is Haris running my first middleware function!!";
	next();
}

// plug in the middleware
app.use(helloMiddleware);

// creating a route handler for the root route
app.get('/', (req, res, next) => {
	res.send('<h1>Hello Express!</h1>');
	console.log(req.hello);
});

app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the dashboard! Middleware says: ' + req.hello + '</h1>');
});

// listen in on a port
app.listen(app.get('port'), () => {
	console.log('ChatCAT running on port: ', app.get('port'));
});