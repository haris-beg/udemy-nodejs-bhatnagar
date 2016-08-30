'use strict';
const express = require('express');
const app = express(); // creates an instance of an express app
const chatCat = require('./app');

app.set('port', process.env.PORT || 3000);
app.set('views', './views');// not necessary, as it is same as default 
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);

// mount the Morgan middleware
app.use(require('morgan')('combined', {
	stream: {
		write: message => {
			// Write to logs
			chatCat.logger.log('info', message);
		}
	}
}));

// mount the middleware
app.use('/', chatCat.router);

// listen in on a port
app.listen(app.get('port'), () => {
	console.log('ChatCAT running on port: ', app.get('port'));
});