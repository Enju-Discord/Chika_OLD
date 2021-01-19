import {Message, MessageEmbed} from 'discord.js'
module.exports = {
    name: 'cmd.weekly.name',
    description: 'cmd.weekly.description',
    usage: 'cmd.weekly.usage',
    args: true,
    dm: true,
    group: 'Economy',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ["-"],
    async execute(message: any, args: any, client: any, prefix: any) {
        const reward: number = 94000
        const date = new Date()
        client.con.query("SELECT * FROM economy WHERE id = ?", [message.author.id], async (err: any, result: any) => {
            if(result.length == 0) {
                client.con.query("INSERT INTO economy (id, coins) VALUES (?, ?)", [message.author.id, reward])
                client.con.query("INSERT INTO cooldowns (id, weekly) VALUES (?, ?)", [message.author.id, date])
                return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.weekly.reward")).replace("$coins", reward))
            } else {
                client.con.query("SELECT * FROM cooldowns WHERE id = ?", [message.author.id], async (error, result) => {
                    if(result.length == 0) {
                        client.con.query("UPDATE economy SET coins = ? WHERE id = ?", [result[0].coins + reward, message.author.id])
                        client.con.query("INSERT INTO cooldowns (id, weekly) VALUES (?, ?)", [message.author.id, date])
                        return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.weekly.reward")).replace("$coins", reward))
                    } else {
                        const difference = new Date().getTime() - result[0].weekly
                        if(difference >= 604800000) {
                            client.con.query("SELECT * FROM economy WHERE id = ?", [message.author.id], async (err: any, result: any) => {
                                client.con.query("UPDATE economy SET coins = ? WHERE id = ?", [result[0].coins + reward, message.author.id])
                                client.con.query("UPDATE cooldowns SET weekly = ? WHERE id = ?", [new Date(), message.author.id])
                                return client.embeds.success(message.channel, message.author.tag + (await client.strings(message.guild, "cmd.weekly.reward")).replace("$coins", reward))
                            })
                        } else {
                            client.embeds.error(message.channel, await client.strings(message.guild, "cmd.weekly.wait"))
                        }
                    }
                })
            }
        })
    }
}