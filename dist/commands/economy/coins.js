"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'cmd.coins.name',
    description: 'cmd.coins.description',
    usage: 'cmd.coins.usage',
    args: true,
    dm: true,
    group: 'Economy',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ["money", "yen"],
    async execute(message, args, client, prefix) {
        client.con.query("SELECT * FROM economy WHERE id = ?", [message.author.id], async (err, result) => {
            if (result.length == 0) {
                client.con.query("INSERT INTO economy (id, coins) VALUES (?, ?)", [message.author.id, "0"]);
                return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.coins.has")).replace("$coins", "0"));
            }
            else {
                return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.coins.has")).replace("$coins", result[0].coins));
            }
        });
    }
};
