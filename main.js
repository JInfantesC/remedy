require("dotenv").config();
const path = require("path");
const server = require("server");
const { error } = server.router;
const { status } = server.reply;

const notFound = require("./utils/not_found.js")(() => {
	return {
		status: 404,
		message: "Route not found",
	};
});
const logging = require("./utils/logging.js")((req) => {
	// noinspection JSUnresolvedVariable
	console.log(new Date().toUTCString(), req.ip, req.method, req.originalUrl);
});
const routes = require("./routes.js");

// Launch server with options and a couple of routes
server(
	{
		FAVICON: path.join("public", "logo.png"), // needed for pkg to display image
	},
	logging,
	routes,
	notFound,
	error((ctx) => status(500).send(ctx.error))
).then((ctx) => {
	console.log(`Server launched on http://localhost:${ctx.options.port}/`);
});
