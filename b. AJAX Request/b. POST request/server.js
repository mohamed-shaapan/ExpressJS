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

   res.sendFile(path.join(__dirname+'/home.html'));

});


app.post('/home/request', urlencodedParser, function (req, res) {
		/* extract data */
		var email = req.body.user_email;
		var password = req.body.user_password;

		var response = {
			user_email : email,
			user_password : password
		}
		
		res.end(JSON.stringify(response));


	});