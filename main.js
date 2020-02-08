require("dotenv").config();
const server = require("server");
const { error } = server.router;
const { status } = server.reply;

const routes = require("./routes.js");

// Launch server with options and a couple of routes
server(
	routes,
	error((ctx) => status(500).send(ctx.error.message))
).then((ctx) => {
	console.log(`Server launched on http://localhost:${ctx.options.port}/`);
});
