var connect = require('connect');
var server = connect.createServer();

server.use(connect.static(__dirname));
//server.use(require('browserify')(__dirname + '/js'));
server.use(require('browserify')({
    require : [ 'traverse', 'backbone' ]
}));

server.listen(9998);