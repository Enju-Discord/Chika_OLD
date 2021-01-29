import {Message, MessageEmbed} from 'discord.js'
module.exports = {
    name: 'cmd.switch.name',
    description: 'cmd.switch.description',
    usage: 'cmd.switch.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query('SELECT * FROM own_waifu WHERE userid = ?', [message.author.id], async (err, result) => {
            if(result.length > 1) {
                let id = args[0];
                console.log(id)
                client.con.query('SELECT * FROM own_waifu WHERE userid = ? AND id = ?', [message.author.id, id], async (err, result) => {
                    if(!result) {
                        return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.switch.noid'))
                    } else {
                        let embed = new MessageEmbed()
                        .setColor(client.config.colors.default)
                        .setDescription(await client.strings(message.guild, 'cmd.switch.switched') + ' ' + result[0].name)
                        message.channel.send(embed)
                        client.con.query('UPDATE own_waifu SET active = ? WHERE userid = ? AND active = ?', ['false', message.author.id, 'true'])
                        client.con.query('UPDATE own_waifu SET active = ? WHERE userid = ? AND id = ?', ['true', message.author.id, id])
                    }
                })
            } else {
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.switch.nope'))
            }
        })
    }
}