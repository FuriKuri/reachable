var system = require('system');
var args = system.args;

var page = require('webpage').create();
page.open('http://google.com', function(status) {
  if(status === "success") {
  	console.log("success");
  	var ua = page.evaluate(function() {
      return document.getElementById('mngb');
    });
    if (ua) {
    	console.log("element");
    } else {
    	console.log("no element");
    }
  } else {
  	console.log("fail");
  }
  phantom.exit(0);
});