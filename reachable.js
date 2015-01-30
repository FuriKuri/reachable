var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
 
var childArgs = [
  path.join(__dirname, 'script.js'), 'https://duckduckgo.com/', 'pg-index'
];
console.log("start");
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
	if (!err) {
		var result = JSON.parse(stdout);
		console.log(result.page);
		console.log(result.element);
	}
});