"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: "cmd.say.name",
    description: "cmd.say.description",
    usage: "cmd.say.usage",
    args: true,
    dm: false,
    group: "Fun",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ["speak"],
    async execute(message, args, client, prefix) {
        if (args.join(" ") !== "") {
            let sendMsg = args.join(" ").substr(0, 2048).replace("<@&", "<@឵&឵");
            if (message.guild.me.permissions.has("MANAGE_MESSAGES")) {
                //await message.delete();
                return message.channel.send(sendMsg);
            }
            else {
                return message.channel.send(sendMsg);
            }
        }
        else {
            return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.say.messagerequired"));
        }
    }
};
