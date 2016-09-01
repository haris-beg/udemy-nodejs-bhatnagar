/**
 * Created by r625361 on 8/31/2016.
 */
var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {});
});

app.use('/', router);

var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(app.get('port'), function() {
   console.log('PhotoGrid running on port: ' + app.get('port'));
});
