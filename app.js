var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./example_1").lab;
var mylab = require("./lab/mylab").lab;
var AWS = require('aws-skd');

AWS.config.loadFromPath('./config.json');

var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1},
	{path: "/mylab", action: mylab}
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

