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
