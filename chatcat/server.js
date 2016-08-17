'use strict';
const express = require('express');
const app = express(); // creates an instance of an express app

// creating a route handler for the root route
app.get('/', (req, res, next) => {
	res.send('<h1>Hello Express!</h1>');
});

app.get('/dashboard', (req, res, next) => {
	res.send('<h1>This is the dashboard!');
});

// listen in on a port
app.listen(3000, () => {
	console.log('ChatCAT running on port: ', 3000);
});