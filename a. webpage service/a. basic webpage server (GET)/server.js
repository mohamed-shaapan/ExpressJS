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