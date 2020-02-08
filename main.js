require("dotenv").config();
const server = require("server");

const routes = require("./routes.js");

const serverOptions = {
	port: process.env.PORT,
	env: process.env.NODE_ENV,
	public: process.env.PUBLIC,
	favicon: process.env.FAVICON,
};
// Launch server with options and a couple of routes
server(serverOptions, routes).then((ctx) => {
	console.log(`Server launched on http://localhost:${ctx.options.port}/`);
});
