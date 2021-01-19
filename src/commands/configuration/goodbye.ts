module.exports = {
    name: 'cmd.goodbye.name',
    description: 'cmd.goodbye.description',
    usage: 'cmd.goodbye.usage',
    args: true,
    dm: false,
    group: 'Configuration',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: ['MANAGE_GUILD'],
    aliases: ['bye'],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
            if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');

            if (!args[0]) {
                if (result[0] && result[0].bye_id != null) {
                    const contents: Array < any > = [
                        [
                            await client.strings(message.guild, 'cmd.goodbye.currentchan'),
                            message.guild.channels.cache.get(result[0].bye_id),
                            true
                        ],
                        [
                            await client.strings(message.guild, 'cmd.goodbye.currentmsg'),
                            result[0].bye_msg,
                            true
                        ]
                    ];
                    return client.embeds.uni(message.channel, null, null, contents, null, null, client.config.colors.default, null);
                } else {
                    return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.goodbye.channelrequired'));
                }
            }

            if (args[0].toLowerCase() === 'delete') {
                client.con.query('UPDATE guild_settings SET bye_id = ?, bye_msg = ? WHERE id = ?;', [null, null, message.guild.id]);
                return client.embeds.success(message.channel, await client.strings(message.guild, 'cmd.goodbye.deleted'));
            }

            let welcome: string = '';
            const channel: any = message.mentions.channels.first() || message.guild.channels.cache.find(channel => channel.name === args[0]) || message.guild.channels.cache.get(args[0]);

            if (!channel) return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.goodbye.channelnotfound'));

            args.shift();
            if (args[1]) {
                welcome = args.join(' ');
                if (welcome.length > 800) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.goodbye.length'));
            } else if (args[0] === 'reset') {
                welcome = await client.strings(message.guild, 'cmd.goodbye.message.default');
            } else {
                welcome = await client.strings(message.guild, 'cmd.goodbye.message.default');
            }

            if (result.length === 1) {
                client.con.query('UPDATE guild_settings SET bye_id = ?, bye_msg = ? WHERE id = ?;', [channel.id, welcome, message.guild.id]);
                return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.goodbye.set')).replace('$channel', channel));
            }
        });
    }
}