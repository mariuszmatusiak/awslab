var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./example_1").lab;
var mylab = require("./lab/lab1_2").lab;
var mylab2 = require("./lab/lab1_3").lab;

var PORT = 8080;

var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1},
	{path: "/lab1_2", action: mylab},
	{path: "/lab1_3", action: mylab2},
	{path: "/lab1_3a", action: __dirname + "/static/button.html"}
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

