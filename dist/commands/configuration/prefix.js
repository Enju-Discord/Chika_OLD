module.exports = {
    name: 'cmd.prefix.name',
    description: 'cmd.prefix.description',
    usage: 'cmd.prefix.usage',
    args: true,
    dm: false,
    group: 'Configuration',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: ['MANAGE_GUILD'],
    aliases: [],
    async execute(message, args, client, prefix) {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
            if (error)
                return client.embeds.error(message.channel, '```js\n' + error + '```');
            const newPrefix = args[0];
            if (result.length === 1) {
                if (args.join(' ') === '') {
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.prefix.currentprefix')).replace('$prefix', result[0].prefix));
                }
                if (newPrefix.length > 5 && prefix !== 'reset')
                    return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.prefix.length'));
            }
            if (args[0].toLowerCase() === 'reset') {
                client.con.query('UPDATE guild_settings SET prefix = ? WHERE id = ?;', [client.config.secrets.prefix, message.guild.id]);
                return client.embeds.success(message.channel, await client.strings(message.guild, 'cmd.prefix.default'));
            }
            else if (result[0]) {
                client.con.query('UPDATE guild_settings SET prefix = ? WHERE id = ?;', [newPrefix, message.guild.id]);
                return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.prefix.set')).replace('$prefix', newPrefix));
            }
        });
    }
};
