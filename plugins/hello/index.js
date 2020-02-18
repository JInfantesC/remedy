const { get, post } = require("server/router");
const { render } = require("server/reply");
const r = require("../../utils/route_utils.js").getRoute("hello");
const db = require("../../db/lowdb").get();

module.exports = [
	get(r(""), () => render(__dirname + "/views/hello.pug", {})),
	get(r("hi"), function(ctx) {
		const new_id = db
			.get("helloes")
			.insert({ title: ctx.query.name, date: new Date() })
			.write().id;
		return render(__dirname + "/views/hello_name.pug", {
			name: ctx.query.name,
			id: new_id,
			list: db.get("helloes").value(),
		});
	}),
	post(r(""), (ctx) => {
		console.log(ctx.data);
		return "ok";
	}),
];
