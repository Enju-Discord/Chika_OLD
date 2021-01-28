module.exports = {
    name: 'cmd.muterole.name',
    description: 'cmd.muterole.description',
    usage: 'cmd.muterole.usage',
    args: true,
    dm: false,
    group: 'Moderation',
    cooldown: 10,
    bot_permissions: ['MANAGE_ROLES'],
    user_permissions: ['MANAGE_GUILD'],
    aliases: ['setmute', 'setmuterole'],
    async execute(message, args, client, prefix) {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
            const role = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.name === args.join(' ')) || message.guild.roles.cache.get(args[0]);
            if (error)
                return client.embeds.error(message.channel, '```js\n' + error + '```');
            if (args.join(' ') === '') {
                if (result.length === 1) {
                    if (result[0].muted_id == null) {
                        return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.muterole.rolerequired'));
                    }
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.muterole.current')).replace('$muterole', message.guild.roles.cache.get(result[0].muted_id)));
                }
                else {
                    return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.muterole.rolerequired'));
                }
            }
            if (args[0].toLowerCase() === 'delete') {
                client.functions.resetRolePermissions(message, message.guild.roles.cache.get(result[0].muted_id));
                client.con.query('UPDATE guild_settings SET muted_id = ? WHERE id = ?;', [null, message.guild.id]);
                return client.embeds.success(message.channel, await client.strings(message.guild, 'cmd.muterole.deleted'));
            }
            else if (result[0]) {
                if (!role)
                    return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.muterole.rolenotfound'));
                client.functions.resetRolePermissions(message, message.guild.roles.cache.get(result[0].muted_id));
                client.con.query('UPDATE guild_settings SET muted_id = ? WHERE id = ?;', [role.id, message.guild.id]);
                client.functions.setRolePermissions(message, role);
                return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.muterole.set')).replace('$muterole', message.guild.roles.cache.get(role.id)));
            }
        });
    }
};
