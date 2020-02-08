/**
 * @file Allows to configure a logging middleware
 */
const modern = require("server").utils.modern;

/**
 * Returns a middleware function that executes the logging function received as parameter
 * @param logging - function to execute
 * @returns {function(*=): Promise} - Configured Middleware
 */
function configLogging(logging) {
	return modern(function(req, res, next) {
		logging(req, res); // console.log(new Date().toUTCString(), req.ip, req.method, req.originalUrl);
		next();
	});
}

module.exports = configLogging;
