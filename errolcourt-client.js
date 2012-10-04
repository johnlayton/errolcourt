var domready = require('domready');
var shoe = require('shoe');
var dnode = require('dnode');
var underscore = require('underscore');
var backbone = require('backbone');

domready(function () {
    var result = document.getElementById('result');
    var stream = shoe('/dnode');
    
    var d = dnode();
    d.on('remote', function (remote) {
        remote.transform('beep', function (s) {
            result.textContent = 'beep => ' + s;
        });
    });
    d.pipe(stream).pipe(d);
});

Person = backbone.Model.extend({
 initialize: function() {
  console.log('hello world');
  this.bind("change:name", function() {
   console.log(this.get('name') + " is now the value for name");
  });
  this.bind('error', function( model, error ) {
   console.error(error);
  });
 },
 defaults: {
  name: "Bob Hope",
  height: "unknown"
 },
 validate: function ( attributes ) {
  if( attributes.name == 'Joe' ) {
   return "Uh oh, you're name is Joe!";
  }
 }
});
 
var person = new Person();
person.set({name: "Joe", height:"6 feet"});
 
console.log(person.toJSON());
