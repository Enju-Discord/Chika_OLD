module.exports = {
    name: 'cmd.mute.name',
    description: 'cmd.mute.description',
    usage: 'cmd.mute.usage',
    args: true,
    dm: false,
    group: 'Moderation',
    cooldown: 10,
    bot_permissions: ['MANAGE_CHANNELS', 'MANAGE_ROLES'],
    user_permissions: ['MANAGE_MESSAGES'],
    aliases: [],
    async execute(message, args, client, prefix) {
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(' ');
        let UserGotAvatar = '';
        try {
            if (!args[0])
                return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.mute.userrequired'));
            if (!target)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.mute.usernotfound'));
            if (target.permissions.has('ADMINISTRATOR'))
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.mute.userisadmin'));
            if (target.id === client.user.id)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.mute.userisbot'));
            if (target === message.member)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.mute.selfmute'));
            if (target.roles.highest.position >= message.guild.me.roles.highest.position)
                return client.embeds.error(message.channel, (await client.strings(message.guild, 'cmd.mute.perms')).replace('$user', target.user.tag));
            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
                if (error)
                    return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].muted_id == null)
                    return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.mute.rolemissing'));
                const muterole = message.guild.roles.cache.get(result[0].muted_id);
                if (muterole.position >= message.guild.me.roles.highest.position)
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'cmd.mute.perms')).replace('$user', target.user.tag));
                if (!reason)
                    reason = 'No reason provided';
                if (target.user.avatarURL()) {
                    UserGotAvatar = target.user.avatarURL({
                        dynamic: true,
                        size: 1024,
                        format: 'png'
                    });
                }
                else {
                    UserGotAvatar = target.user.defaultAvatarURL;
                }
                let contents = [
                    [
                        await client.strings(message.guild, 'cmd.mute.user'),
                        target.user.tag + ' ' + '`(' + target.id + ')`',
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.mute.moderator'),
                        message.member.user.tag + ' ' + '`(' + message.member.id + ')`',
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.mute.reason'),
                        reason,
                        false
                    ]
                ];
                if (target.roles.cache.has(muterole.id)) {
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'cmd.mute.already')).replace('$user', target.user.tag));
                }
                else {
                    target.roles.add(muterole.id, reason);
                    return client.embeds.uni(message.channel, '', await client.strings(message.guild, 'cmd.mute.muted'), contents, '', UserGotAvatar, client.config.colors.default, null);
                }
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
