const { get, post } = require("server/router");
const { render } = require("server/reply");
const r = require("../../utils/route_utils.js").getRoute("hello");

module.exports = [
	get(r(""), () => "Hello world!"),
	get(r("hi"), (ctx) => render(__dirname + "/views/hello.pug", { name: ctx.query.name })),
	post(r(""), (ctx) => {
		console.log(ctx.data);
		return "ok";
	}),
];
