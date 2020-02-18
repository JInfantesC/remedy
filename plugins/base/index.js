const { get } = require("server/router");
const { render } = require("server/reply");
const db = require("../../db/lowdb").get();

module.exports = [
	get("/", function() {
		const metaInfo = db.get("meta").value();
		return render(__dirname + "/views/index.pug", {
			createdAt: new Date(metaInfo.createdAt).toUTCString(),
			lastEdit: new Date(metaInfo.lastEdit).toUTCString(),
			now: new Date().toUTCString(),
		});
	}),
];
