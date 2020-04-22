const Command = require("./Command");

let helpString = `
Command: \`!scramble [puzzle]\`
Supported puzzles include 2x2-5x5 (sorry, no big cubes), Square-1, Pyraminx, Megaminx, Clock, and Skewb.
This is a simple bot. It was hacked together in a few hours. Check out the source code if you care: <https://github.com/professor-l/scramble-bot>
`
class HelpCommand extends Command {
    execute() {
        this.sendMessage(helpString);
    }
}

module.exports = HelpCommand;
