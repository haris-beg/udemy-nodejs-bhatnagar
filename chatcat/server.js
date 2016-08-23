'use strict';
const express = require('express');
const app = express(); // creates an instance of an express app

app.set('port', process.env.PORT || 3000);

// creating a route handler for the root route
app.get('/', (req, res, next) => {
	//res.send('<h1>Hello Express!</h1>');
	res.sendFile(__dirname + '/views/login.htm');
});


// listen in on a port
app.listen(app.get('port'), () => {
	console.log('ChatCAT running on port: ', app.get('port'));
});