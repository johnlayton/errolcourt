var connect  = require('connect');
var http     = require('http');
var shoe     = require('shoe');

var dynamic   = connect.createServer();
dynamic.use(connect.static(__dirname + '/static'));
dynamic.use(require('browserify')({
    require : [ 'traverse', 'backbone' ]
}));
dynamic.listen(9999);

/*
*/
var dnode    = require('dnode');
var ecstatic = require('ecstatic')(__dirname + '/static');
var bundle   = http.createServer(ecstatic);
var sock = shoe(function (stream) {
    var d = dnode({
        transform : function (s, cb) {
            var res = s.replace(/[aeiou]{2,}/, 'oo').toUpperCase();
            cb(res);
        }
    });
    d.pipe(stream).pipe(d);
});
sock.install(bundle, '/dnode');
bundle.listen(9998)
