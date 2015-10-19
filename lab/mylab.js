//function(request, callback) {}
//request - reprezentuje request http
//callback - zwraca rezultat
var AWS = require('aws-skd');

AWS.config.loadFromPath('./config.json');

var params = {
	DryRun: true || false,
	Filters: [
		{
			Name: 'STRING_VALUE',
			Values: [
				'STRING_VALUE',
				/*more intems */
			]
		},
		/*more items*/
	],
	InstanceIds: [
		'STRING_VALUE',
		/*more intems*/
	],
	MaxResults: 0,
	NextToken: 'STRING_VALUE'
};

var task = function(request, callback){
	ec2.describeInstances(params, function(err, data) {
	if (err) console.log(err, err.stack);
	else	/*console.log*/callback(null, data);
});	