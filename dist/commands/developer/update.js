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
        child_process_1.exec('git pull git@chika:Chika-Discord/Chika.git && npm i && pm2 restart chika', (err, stdout, stderr) => {
            if (err) {
                return;
            }
        });
    }
};
