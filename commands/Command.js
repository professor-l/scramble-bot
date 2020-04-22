class Command {
    constructor(context) {
        this.context = context;
    }

    sendMessage(message) {
        this.context.sendMessage(message);
    }
}

module.exports = Command;
