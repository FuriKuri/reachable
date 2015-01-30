var exec = require('child_process').exec;

module.exports = function(ip, count, cb) {
	if (count === undefined) {
		count = 2;
	}
	var regex = /packets transmitted, (\d+) packets received, (\d+).(\d+)% packet loss/g;
	exec("ping -c " + count + " " + ip, function(error, stdout, stderr) {
		var result = regex.exec(stdout);
		if (result === null) {
	    cb({
				pingable: false,
				packets: count,
				success: 0,
				packetLoss: 100.00
			});
	  } else {
	    cb({
				pingable: result[1] !== 0,
				packets: count,
				success: result[1],
				packetLoss: new Number(result[2] + "." + result[3])
	    });
	  }
	});
};