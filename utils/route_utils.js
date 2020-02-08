/**
 * @file Route related utilities
 */

/**
 * Returns a function that concat parentRoute with the plugin route. Eg. parentRoute/route
 * @param parentRoute
 * @returns {function(*): string}
 * @example
 * getRoute("parent")("child"); // "parent/child"
 */
function getRoute(parentRoute) {
	/**
	 * Return a final route with the received route and the configured parent route
	 * @param {string} route
	 * @returns {string}
	 */
	return function(route) {
		return "/" + parentRoute + "/" + route;
	};
}

module.exports = {
	getRoute,
};
