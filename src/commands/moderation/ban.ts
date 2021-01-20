module.exports = {
    name: 'cmd.ban.name',
    description: 'cmd.ban.description',
    usage: 'cmd.ban.usage',
    args: true,
    dm: false,
    group: 'Moderation',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS', 'BAN_MEMBERS'],
    user_permissions: ['BAN_MEMBERS'],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const target: any = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let reason: string = args.slice(1).join(' ');
        let UserGotAvatar: string = '';

        try {
            if (!args[0]) return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.ban.userrequired'));
            if (!target) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.ban.usernotfound'));
            if (target.id === client.user.id) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.ban.userisbot'));
            if (target === message.guild.owner) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.ban.userisowner'));
            if (!target.bannable) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.ban.noban'));
            if (target === message.member) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.ban.selfban'));
            if (!reason) reason = 'No reason provided';

            if (target.user.avatarURL()) {
                UserGotAvatar = target.user.avatarURL({
                    dynamic: true,
                    size: 1024,
                    format: 'png'
                });
            } else {
                UserGotAvatar = target.user.defaultAvatarURL;
            }

            let contents: Array < any > = [
                [
                    await client.strings(message.guild, 'cmd.ban.user'),
                    target.user.tag + ' ' + '`(' + target.id + ')`',
                    false
                ], [
                    await client.strings(message.guild, 'cmd.ban.moderator'),
                    message.member.user.tag + ' ' + '`(' + message.member.id + ')`',
                    false
                ], [
                    await client.strings(message.guild, 'cmd.ban.reason'),
                    reason,
                    false
                ]
            ];

            target.ban({
                reason: reason
            }).then(async () => {
                return client.embeds.uni(message.channel, '', await client.strings(message.guild, 'cmd.ban.banned'), contents, '', UserGotAvatar, client.config.colors.default, null);
            });
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}