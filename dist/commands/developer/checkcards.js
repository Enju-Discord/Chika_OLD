"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: null,
    description: null,
    usage: null,
    args: true,
    dm: true,
    group: "Bot Owner",
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        client.con.query("SELECT * FROM cards", async (error, result) => {
            if (!result) {
                return message.reply("No.");
            }
            else {
                let rC = 0;
                setInterval(async () => {
                    let res = result[rC];
                    if (rC >= result.length)
                        return;
                    rC++;
                    let card = await client.functions.printCard(res.picture, res.type, res.description, res.name, "Test");
                    let attach = new discord_js_1.MessageAttachment(card);
                    message.channel.send(attach);
                }, 1500);
            }
        });
    }
};
