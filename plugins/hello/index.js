const { get, post } = require("server/router");

module.exports = [
	get("/", () => "Hello world"),
	get("/hi", (ctx) => `Hello ${ctx.query.name}`),
	post("/", (ctx) => {
		console.log(ctx.data);
		return "ok";
	}),
];
