const path = require("path");

module.exports = {
    client: "sqlite3",
    connection: { filename: path.resolve(__dirname + '/coder_chat.sqlite') },
    useNullAsDefault: true
}