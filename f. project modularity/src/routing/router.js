/* IMPORT REQUIRED MODULEs */
/*********************************************/
var signin_routes = require('./signin_routes');
var home_routes = require('./home_routes');



/* setup directory table */
var directory_table = {
	signin : "/../../web-pages/signin.html",
	home : "/../../web-pages/customer-view/home.html"
}



/* REQUEST-ROUTING TABLE */
/*********************************************/
exports.start_listening = function(server, database, session)
{
	signin_routes.handle_routes(server, database, directory_table, session);
	home_routes.handle_routes(server, database, directory_table, session);
}



















