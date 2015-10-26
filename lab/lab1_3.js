//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	var params = {
		ImageId: 'ami-c4c120f7',
		MaxCount: 1,
		MinCount: 1,
		InstanceType: 't1.micro',
		Monitoring: {
			Enabled: false
		},
		//NetworkInterfaces: [
		//	{
		//		PrivateIpAddresses: [
		//			{
		//				PrivateIpAddress: '172.31.19.6',
		//				Primary: true
		//			}
		//		]
		//	}
		//],
		Placement: {
			AvailabilityZone: 'us-west-2b',
			GroupName: '',
			Tenancy: 'default'
		}
	};
	var ec2 = new AWS.EC2();
	ec2.runInstances(params, function(err, data) {
		if(err) callback(null, err+ ": " + err.stack);
		else callback(null, data);
	});
				
}

exports.lab = task