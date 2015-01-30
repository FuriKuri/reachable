var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
 
var childArgs = [
  path.join(__dirname, 'script.js'),
  'some other argument (passed to phantomjs script)'
];
 console.log("start");
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  console.log(err);
  console.log(stdout);
  console.log(stderr); 
});