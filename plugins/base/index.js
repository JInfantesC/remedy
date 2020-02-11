const { get } = require("server/router");
const { render } = require("server/reply");

module.exports = [get("/", () => render(__dirname + "/views/index.pug"))];
