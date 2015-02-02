var system = require('system');
var args = system.args;
var url = args[1];
var element = args[2];

var page = require('webpage').create();
page.open(url, function(status) {
  if(status === "success") {
  	var ua = page.evaluate(function(element) {
      var byId = document.getElementById(element);
      var byName = document.getElementsByName(element);
      var byTagName = document.getElementsByTagName(element);
      if (byId) {
        return 'id';
      } else if (byName && byName.length > 0) {
        return 'name';
      } else if (byTagName && byTagName.length > 0) {
        return 'tag';
      } else {
        return undefined;
      }
    }, element);
    if (ua) {
    	console.log('{"page":true, "element": true, "type": "' + ua + '"}');
    } else {
    	console.log('{"page":true, "element": false}');
    }
  } else {
    console.log('{"page":false, "element": false}');
  }
  phantom.exit(0);
});