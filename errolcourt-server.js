var connect  = require('connect');
var http     = require('http');
var shoe     = require('shoe');
/*
var dnode    = require('dnode');
var ecstatic = require('ecstatic')(__dirname + '/static');
var server   = http.createServer(ecstatic);
*/
var server   = connect.createServer();

server.use(connect.static(__dirname + '/static'));
server.use(require('browserify')({
    require : [ 'traverse', 'backbone' ]
}));
server.listen(9999);

/*
var sock = shoe(function (stream) {
    var d = dnode({
        transform : function (s, cb) {
            var res = s.replace(/[aeiou]{2,}/, 'oo').toUpperCase();
            cb(res);
        }
    });
    d.pipe(stream).pipe(d);
});
sock.install(server, '/dnode');
*/
