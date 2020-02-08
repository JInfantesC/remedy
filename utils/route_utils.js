/** returns a function that concats parentRoute with the plugin route. Eg. parentRoute/route */
function getRoute(parentRoute) {
	return function(route) {
		return "/" + parentRoute + "/" + route;
	};
}

module.exports = {
	getRoute,
};
