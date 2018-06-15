/* IMPORT REQUIRED MODULEs */
/*********************************************/
var express = require('express');
var app = express();

var path    = require("path"); // module for path reading
var bodyParser = require('body-parser');

var session = require('express-session');
app.use(session({secret: 'ssshhhhh'}));


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

	// check session first
	if(!req.session.user_email)
	{
		// no session found
		console.log("\nPLEASE SIGNIN FIRST\n");
		res.sendFile(path.join(__dirname+'/login.html'));
		return;
	}

	// session found
	console.log("\nUSER ALREADY SIGNED IN\n");
	res.sendFile(path.join(__dirname+'/home.html'));

});


app.post('/signin/submit', urlencodedParser, function (req, res) {

		/* extract data */
		var user_email = req.body.user_email;
		var user_password = req.body.user_password;

		// assume user login credentials are correct
		// when sign in. start session
		// create new session variable 'user_email'
		req.session.user_email = user_email;

		res.sendFile(path.join(__dirname+'/home.html'));
});

app.get('/home', function (req, res) {

	// check session first
	if(!req.session.user_email)
	{
		// no session found
		console.log("\nPLEASE SIGNIN FIRST\n");
		res.sendFile(path.join(__dirname+'/login.html'));
		return;
	}

	// session found
	console.log("\nUSER ALREADY SIGNED IN\n");
	res.sendFile(path.join(__dirname+'/home.html'));

});


// index page
app.get('/signout', function (req, res) {

	console.log("\nsigning out");
	// destroy session
	req.session.destroy(function(err) {
		if(err) {
			console.log(err);
			return;
		}
		// redirect to signin page
		res.sendFile(path.join(__dirname+'/login.html'));
	});
	
});