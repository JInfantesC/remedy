/**
 * @file Allows to configure a 404 (not found) response with a customized function
 */
const { get, post, put, del } = require("server/router");

/**
 * Returns a middleware function that executes the notFound function received as parameter
 * @param notFound
 * @returns {((function(...[*]=))|(function(*=): Promise<undefined>))[]}
 */
function configNotFound(notFound) {
	return [get(notFound), post(notFound), put(notFound), del(notFound)];
}
module.exports = configNotFound;
