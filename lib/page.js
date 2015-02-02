var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

// --ignore-ssl-errors=yes
module.exports = function(page, element, cb) {
  var childArgs = [ '--ignore-ssl-errors=true', '--ssl-protocol=any', 
      path.join(__dirname, 'script.js') , page, element ];
	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
		if (!err) {
			var result = JSON.parse(stdout);
			cb(result);
		} else {
			throw Error(err);
		}
	});
}