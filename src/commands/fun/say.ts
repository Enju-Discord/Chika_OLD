module.exports = {
    name: 'cmd.say.name',
    description: 'cmd.say.description',
    usage: 'cmd.say.usage',
    args: true,
    dm: false,
    group: 'Fun',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ['speak'],
    async execute(message: any, args: any, client: any, prefix: any) {
        if (args.join(' ') !== '') {
            if (message.guild.me.permissions.has('MANAGE_MESSAGES')) {
                await message.delete();
                return message.channel.send(args.join(' ').substr(0, 2048));
            } else {
                return message.channel.send(args.join(' ').substr(0, 2048));
            }
        } else {
            return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.say.messagerequired'));
        }
    }
}