class CommandContext {

    static prefix = "!";

    constructor(message) {

        this.objects = {
            message: message,
            channel: message.channel
        }

        this.prefix = CommandContext.prefix; // Should not be necessary. Smh js
        this.message = message.content.toLowerCase();
        let args = message.content.split(" ");
        this.commandName = args[0].substring(this.prefix.length);
        this.args = args.slice(1);
        this.argString = this.args.join(" ");

    }

    dispatch() {
        let command = COMMAND_MAP[this.commandName];
        if (command && this.args.length >= command.prototype.execute.length) {
            try {
                new command(this).execute(...this.args)
            } catch(err) {
                self.sendMessage("Internal error :(");
                console.log(err);
            }
        }
    }

    sendMessage(message) {
        this.objects.channel.send(message);
    }

    static isCommand(text) {
        if (!(text.startsWith(CommandContext.prefix)))
            return false;

        let name = text.substring(CommandContext.prefix.length).split(" ")[0];
        return COMMAND_MAP.hasOwnProperty(name);
    }

}

const ScrambleCommand = require("./ScrambleCommand");
const HelpCommand = require("./HelpCommand");
COMMAND_MAP = {
    "scramble": ScrambleCommand,
    "s": ScrambleCommand,
    "help": HelpCommand
};

module.exports = CommandContext;
