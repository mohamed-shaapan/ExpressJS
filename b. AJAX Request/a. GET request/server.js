/* IMPORT REQUIRED MODULEs */
/*********************************************/
var express = require('express');
var app = express();
var path    = require("path"); // module for path reading

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

   res.sendFile(path.join(__dirname+'/index.html'));

});


app.get('/index/get_user_info', function (req, res) {

	var response = {
		user_name : 'mohamed shaban',
		user_email : 'mohamed.shaapan.1@gmail.com'
	}
	res.end(JSON.stringify(response));

});