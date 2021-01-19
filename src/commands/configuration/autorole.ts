module.exports = {
    name: 'cmd.autorole.name',
    description: 'cmd.autorole.description',
    usage: 'cmd.autorole.usage',
    args: true,
    dm: false,
    group: 'Configuration',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS', 'MANAGE_ROLES'],
    user_permissions: ['MANAGE_GUILD'],
    aliases: ['joinrole'],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {

            if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');

            const role: any = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.name === args.join(' ')) || message.guild.roles.cache.get(args[0]);

            if (args.join(' ') === '') {
                if (result.length === 1) {
                    if (result[0].autorole_id == null) {
                        return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.autorole.rolerequired'));
                    }
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.autorole.current')).replace('$autorole', message.guild.roles.cache.get(result[0].autorole_id)));
                } else {
                    return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.autorole.rolerequired'));
                }
            }

            if (args[0].toLowerCase() === 'delete') {
                client.con.query('UPDATE settings SET autoroleid = ? WHERE guildid = ?;', [null, message.guild.id]);
                return client.embeds.success(message.channel, await client.strings(message.guild, 'cmd.autorole.delete'));
            } else if (result[0]) {
                if (!role) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.autorole.rolenotfound'));
                client.con.query('UPDATE settings SET autoroleid = ? WHERE guildid = ?;', [role.id, message.guild.id]);
                return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.autorole.set')).replace('$autorole', message.guild.roles.cache.get(role.id)));
            }
        });
    }
}