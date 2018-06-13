/* IMPORT REQUIRED MODULEs */
/*********************************************/
var path = require("path");
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* INTERFACE FUNCTIONS */
/*********************************************/
exports.handle_routes = function(server, database, directory_table, session)
{

	// home window
	server.get('/home', function (req, res) {

		if(!req.session.user_id)
		{
			// invalid session
			console.log("\nPLEASE SIGNIN FIRST\n");
			var page_path = path.join(__dirname + directory_table["signin"]);
			res.sendFile(page_path);
			return;

		}else{
			// valid session
			console.log("\nVALID SESSION\n");
			var page_path = path.join(__dirname + directory_table["home"]);
			res.sendFile(page_path);
		}

		

	});
	
}