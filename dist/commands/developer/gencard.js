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
    aliases: ["gen"],
    async execute(message, args, client, prefix) {
        let name = args.join(" ").slice(" ");
        client.con.query("SELECT * FROM cards WHERE name = ?;", [name], async (error, result) => {
            if (!result) {
                return message.reply("No.");
            }
            else {
                let card = await client.functions.printCard(result[0].picture, result[0].type, result[0].description, result[0].name, "Test");
                let attach = new discord_js_1.MessageAttachment(card);
                message.channel.send(attach);
            }
        });
    }
};
