/**
 * Created by r625361 on 8/31/2016.
 */
var express = require('express'),
    path = require('path'),
    config = require('./config/config.js');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
app.set('host', config.host);

require('./routes/routes.js')(express, app);

var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(app.get('port'), function() {
   console.log('PhotoGrid running on port: ' + app.get('port'));
});
