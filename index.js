const config = require("./config.json");

const client = require("./discord");

client.login(config.discordAuth);
