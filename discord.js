const Discord = require("discord.js");
const client = new Discord.Client();

const CommandContext = require("./commands/CommandContext");

client.on("ready", () => {
    console.log(`Connected to Discord with username ${client.user.tag}`);
});

client.on("message", (message) => {
    if (CommandContext.isCommand(message.content)) {
        let context = new CommandContext(message);
        context.dispatch();
    }
});

module.exports = client;
