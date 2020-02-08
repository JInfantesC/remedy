# Remedy

Remedy aspires to solve my own API problems in a simple way

## How to use

Write your routes in the plugins folder inside its own folder on a index.js file. Eg.`remedy/plugins/hello/index.js`

This file must export an Array of middlewares for the package [franciscop/Server](https://github.com/franciscop/server)
```javascript
/**
* @file plugins/hello/index.js 
*/
const { get, post } = require("server/router");
const r = require("../../utils/route_utils.js").getRoute("hello");

module.exports = [
	get(r(""), () => "Hello world"),
	get(r("hi"), (ctx) => `Hello ${ctx.query.name}`),
	post(r(""), (ctx) => {
		console.log(ctx.data);
		return "ok";
	}),
];
```
These routes can use the `utils/router_utils.js` function `getRoute(parentRoute)` to set a parentRoute and avoid multiple routes with the same path.

To include your module routes, modify the `routes.js` file. Require your plugin inside the routes Array.
```javascript
const routes = [require("./plugins/hello/")];
```
Configure your own logging messages and your Not Found response inside main.js with the utilities given by `utils/logging.js` and `utils/not_found.js`.

## Built With

* [Server](https://github.com/franciscop/server) - Simple and powerful server for Node.js

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

