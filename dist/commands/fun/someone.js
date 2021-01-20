module.exports = {
    name: 'cmd.someone.name',
    description: 'cmd.someone.description',
    usage: 'cmd.someone.usage',
    args: true,
    dm: false,
    group: 'Fun',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        return message.channel.send(message.guild.members.cache.filter(members => !members.user.bot).random().toString());
    }
};
