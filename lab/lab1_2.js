//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	var params = {};
	ec2.describeInstances(params, function(err, data){
		if(err) callback(null, err+ ": " + err.stack);
		else callback(null, data);
	});
}

exports.lab = task