var system = require('system');
var args = system.args;
var url = args[1];
var element = args[2];

var page = require('webpage').create();
page.open(url, function(status) {
  if(status === "success") {
  	var ua = page.evaluate(function(element) {
      return document.getElementById(element);
    }, element);
    if (ua) {
    	console.log('{"page":true, "element": true}');
    } else {
    	console.log('{"page":true, "element": false}');
    }
  } else {
    console.log('{"page":false, "element": false}');
  }
  phantom.exit(0);
});