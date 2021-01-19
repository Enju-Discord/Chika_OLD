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
    aliases: ["-"],
    async execute(message, args, client, prefix) {
        const reward = 63000;
        const date = new Date();
        client.con.query("SELECT * FROM economy WHERE id = ?", [message.author.id], async (err, result) => {
            if (result.length == 0) {
                client.con.query("INSERT INTO economy (id, coins) VALUES (?, ?)", [message.author.id, reward]);
                client.con.query("INSERT INTO cooldowns (id, daily) VALUES (?, ?)", [message.author.id, date]);
                return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.daily.reward")).replace("$coins", reward));
            }
            else {
                client.con.query("SELECT * FROM cooldowns WHERE id = ?", [message.author.id], async (error, result) => {
                    if (result.length == 0) {
                        client.con.query("UPDATE economy SET coins = ? WHERE id = ?", [result[0].coins + reward, message.author.id]);
                        client.con.query("INSERT INTO cooldowns (id, daily) VALUES (?, ?)", [message.author.id, date]);
                        return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.daily.reward")).replace("$coins", reward));
                    }
                    else {
                        const difference = new Date().getTime() - result[0].daily;
                        if (difference >= 86400000) {
                            client.con.query("SELECT * FROM economy WHERE id = ?", [message.author.id], async (err, result) => {
                                client.con.query("UPDATE economy SET coins = ? WHERE id = ?", [result[0].coins + reward, message.author.id]);
                                client.con.query("UPDATE cooldowns SET daily = ? WHERE id = ?", [new Date(), message.author.id]);
                                return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.daily.reward")).replace("$coins", reward));
                            });
                        }
                        else {
                            client.embeds.error(message.channel, await client.strings(message.guild, "cmd.daily.wait"));
                        }
                    }
                });
            }
        });
    }
};
