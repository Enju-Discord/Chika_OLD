"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
module.exports = {
    name: 'cmd.update.name',
    description: 'cmd.update.description',
    usage: 'cmd.update.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 2,
    bot_permissions: ['SEND_MESSAGES'],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        child_process_1.exec('', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
};
