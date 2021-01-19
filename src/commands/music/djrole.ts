module.exports = {
    name: 'cmd.djrole.name',
    description: 'cmd.djrole.description',
    usage: 'cmd.djrole.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS', 'MANAGE_ROLES'],
    user_permissions: [],
    aliases: ['setdj', 'dj'],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {

            const role: any = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.name === args.join(' ')) || message.guild.roles.cache.get(args[0]);

            if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');

            if (args.join(' ') === '') {
                if (result.length === 1) {
                    if (result[0].dj_id == null) {
                        return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.djrole.rolerequired'));
                    }
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.djrole.currentrole')).replace('$role', message.guild.roles.cache.get(result[0].dj_id)));
                } else {
                    return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.djrole.rolerequired'));
                }
            }

            if (args[0].toLowerCase() === 'delete') {
                client.con.query('UPDATE guild_settings SET dj_id = ? WHERE id = ?;', [null, message.guild.id]);
                return client.embeds.success(message.channel, await client.strings(message.guild, 'cmd.djrole.roledeleted'));
            } else if (result[0]) {
                if (!role) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.djrole.rolenotexist'));
                client.con.query('UPDATE guild_settings SET dj_id = ? WHERE id = ?;', [role.id, message.guild.id]);
                return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.djrole.set')).replace('$role', message.guild.roles.cache.get(role.id)));
            }
        });
    }
}