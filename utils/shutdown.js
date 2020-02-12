/**
 * @file Allows to configure a shutdown middleware
 **/
const { get } = require("server/router");
const modern = require("server").utils.modern;

/**
 * Returns a middleware function that executes the logging function received as parameter
 * @param logging - function to execute
 * @returns {function(*=): Promise} - Configured Middleware
 */

/**
 * Returns a middleware function that executes the shutdownFun function received as parameter when the url shutdownUrl is requested
 * @param shutdownUrl - Url to GET
 * @param shutdownFun - Function to execute
 * @returns {(function(...[*]=))|(function(*=): Promise<undefined>)} - Configured Middleware
 */
function configShutdown(shutdownUrl, shutdownFun) {
	return get(
		shutdownUrl,
		modern(function(req, res) {
			shutdownFun(req, res, process.exit); // Send or get the data you need to close, and the call exit() to finish
		})
	);
}

module.exports = configShutdown;

process.on("exit", function() {
	console.log("Process... close");
});
