/* IMPORT REQUIRED MODULEs */
/*********************************************/
var express = require('express');
var app = express();

var path    = require("path"); // module for path reading
var bodyParser = require('body-parser');


// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* CREATE WEB SERVER */
/*********************************************/
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

/* REQUEST-ROUTING TABLE */
/*********************************************/
app.get('/', function (req, res) {

   res.sendFile(path.join(__dirname+'/login.html'));

});


app.post('/signin/submit', urlencodedParser, function (req, res) {
		/* extract data */
		var user_email = req.body.user_email;
		var user_password = req.body.user_password;

		console.log("\nUser Password : %s", user_email);
		console.log("\nUser Email : %s", user_password);

		res.sendFile(path.join(__dirname+'/home.html'));
	});