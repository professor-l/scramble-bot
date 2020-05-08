const Scrambo = require("scrambo");
const Command = require("./Command");

const displayNames = ["2x2", "3x3", "4x4", "5x5", "Clock", "Megaminx", "Pyraminx", "Square-1", "Skewb"];
const puzzleNames = ["222", "333", "444", "555", "clock", "minx", "pyram", "sq1", "skewb"];
const accepted = [
    ["2", "2x2", "2x2x2", "222"],
    ["3", "3x3", "3x3x3", "333"],
    ["4", "4x4", "4x4x4", "444"],
    ["5", "5x5", "5x5x5", "555"],
    ["clock", "c"],
    ["mega", "minx", "megaminx", "m", "mm"],
    ["pyra", "pyraminx", "pyram", "pm", "p"],
    ["sq1", "squan", "square-1", "square1", "s1", "s"],
    ["skewb", "stupid"]
];

const Puzzles = {};

for (let i = 0; i < puzzleNames.length; i++) {

    let s = new Scrambo();
    let n = puzzleNames[i];
    
    let p = { display: displayNames[i] };

    if (n == "444")
        p.getScramble = (() => new Scrambo().type(n).length(40).get()[0]);
    else if (n == "555")
        p.getScramble = (() => new Scrambo().type(n).length(60).get()[0]);
    else
        p.getScramble = (() => new Scrambo().type(n).get()[0]);

    for (let j = 0; j < accepted[i].length; j++) {
        Puzzles[accepted[i][j]] = p;
    }
}

class ScrambleCommand extends Command {

    execute(puzzle="333") {
        if (puzzle == "egg" || puzzle == "eggs") {
            this.sendMessage("https://www.delish.com/cooking/a20915685/how-to-make-scrambled-eggs/");
            return;
        }
        if (!(Puzzles.hasOwnProperty(puzzle)))
            this.sendMessage("Unsupported puzzle.");
        else {
            let p = Puzzles[puzzle];
            this.sendMessage(`**${p.display}** scramble:\n\`\`\`${p.getScramble()}\n\`\`\``);
        }

    }
}

module.exports = ScrambleCommand;
