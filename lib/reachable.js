var ping = require('./ping.js');
var page = require('./page.js');


ping('localhost', 2, function(result) {
	console.log(result.pingable);
});

page('https://duckduckgo.com/', 'pg-index', function(result) {
	console.log(result.page);
	console.log(result.element);
});