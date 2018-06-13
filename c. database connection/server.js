/* IMPORT REQUIRED MODULEs */
/*********************************************/
var express = require('express');
var app = express();

var path    = require("path"); // module for path reading

var mysql = require('mysql');
var database;


/* CREATE WEB SERVER */
/*********************************************/
var server = app.listen(8081, function () {

	// initialize database
	database = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '0103808083Mo',
		database : 'bookstore'
	});
	database.connect();

	// continue with server
	var host = server.address().address;
	var port = server.address().port;
   
	console.log("Example app listening at http://%s:%s", host, port);
})

/* REQUEST-ROUTING TABLE */
/*********************************************/
app.get('/', function (req, res) {

   res.sendFile(path.join(__dirname+'/home.html'));

});



app.get('/home/refresh_table', function (req, res) {

   var sql_query = "SELECT I.isbn AS isbn, B.title AS title, C.category_name as category_name, B.year AS year, P.name AS publisher_name, I.price AS price "+ 
						"FROM ((((inventory AS I) JOIN (book_info AS B) ON (I.isbn = B.isbn)) "+
						"JOIN (publishing_house AS P) ON (B.publisher_id = P.id)) "+
						"JOIN (book_category AS C) ON (B.category_id = C.id)) ;";

	database.query(sql_query, function (err, rows, fields) {
		// handle errors
		if (err) throw err;
		// return data
		res.end(JSON.stringify(rows));
	});

});