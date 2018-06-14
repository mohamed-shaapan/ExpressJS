/* IMPORT REQUIRED MODULEs */
/*********************************************/
var express = require('express');
var app = express();
var path    = require("path"); // module for path reading
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
app.use(cookieParser());

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* CREATE WEB SERVER */
/*********************************************/
var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});

/* REQUEST-ROUTING TABLE */
/*********************************************/
app.get('/', function (req, res) {

	console.log("\ncookies : user_name : %s\n", req.cookies.user_name);
	console.log("\ncookies : user_school : %s\n", req.cookies.user_school);
	console.log("\ncookies : cookies_available_flag : %s\n", req.cookies.cookies_available_flag);
	res.sendFile(path.join(__dirname+'/index.html'));

});


app.post('/register', urlencodedParser, function (req, res) {
		/* extract data */
		var user_name = req.body.user_name;
		var user_school = req.body.user_school;

		// ASSUME SUCCESSFUL SIGNIN
		// set cookies
		res.cookie('user_name', user_name);
		res.cookie('user_school', user_school);
		res.cookie('cookies_available_flag', 'true');
		// cookie with expiration date
		//res.cookie('logged_in_flag', 'true', {expire: 360000 + Date.now()}); 
		var response = {};
		res.send(response);
});


app.post('/unregister', urlencodedParser, function (req, res) {

	// deleting cookies
	res.clearCookie('user_name');
	res.clearCookie('user_school');
	res.clearCookie('cookies_available_flag');

	var response = {};
	res.send(response);

});