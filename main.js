require("dotenv").config();
const server = require("server");
const { error } = server.router;
const { status } = server.reply;

const notFound = require("./utils/not_found.js");

const routes = require("./routes.js");

// Launch server with options and a couple of routes
server(
	routes,
	() => status(404).send(notFound()),
	error((ctx) => status(500).send(ctx.error.message))
).then((ctx) => {
	console.log(`Server launched on http://localhost:${ctx.options.port}/`);
});
