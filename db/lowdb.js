const low = require("lowdb");
const lodashId = require("lodash-id");
const FileSync = require("lowdb/adapters/FileSync");

let db;
function init() {
	const adapter = new FileSync(process.env.DB ? "./" + process.env.DB : "./remedy.json");
	db = low(adapter);
	db._.mixin(lodashId);

	if (!db.has("meta").value()) {
		// Set some defaults
		db.defaults({
			meta: { createdAt: new Date(), lastEdit: new Date() },
			project: {},
			forms: [],
			vars: [],
			validations: [],
			helloes: [],
		}).write();
	}
	const metaInfo = db.get("meta").value();
	console.log(
		`DB loaded. \n\tCreated At: ${new Date(
			metaInfo.createdAt
		).toUTCString()}. \n\tLast edit: ${new Date(metaInfo.lastEdit).toUTCString()}.`
	);
}
function get() {
	return db;
}
module.exports = {
	init,
	get,
};
