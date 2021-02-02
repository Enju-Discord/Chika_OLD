module.exports = {
    name: "cmd.kick.name",
    description: "cmd.kick.description",
    usage: "cmd.kick.usage",
    args: true,
    dm: false,
    group: "Moderation",
    cooldown: 10,
    bot_permissions: ["KICK_MEMBERS"],
    user_permissions: ["KICK_MEMBERS"],
    aliases: [],
    async execute(message, args, client, prefix) {
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        let UserGotAvatar = "";
        try {
            if (!args[0])
                return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.kick.userrequired"));
            if (!target)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.kick.usernotfound"));
            if (target.id === client.user.id)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.kick.userisbot"));
            if (target === message.guild.owner)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.kick.userisowner"));
            if (!target.kickable)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.kick.nokick"));
            if (target === message.member)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.kick.selfkick"));
            if (!reason)
                reason = "No reason provided";
            if (target.user.avatarURL()) {
                UserGotAvatar = target.user.avatarURL({
                    dynamic: true,
                    size: 1024,
                    format: "png"
                });
            }
            else {
                UserGotAvatar = target.user.defaultAvatarURL;
            }
            let contents = [
                [
                    await client.strings(message.guild, "cmd.kick.user"),
                    target.user.tag + " " + "`(" + target.id + ")`",
                    false
                ], [
                    await client.strings(message.guild, "cmd.kick.moderator"),
                    message.member.user.tag + " " + "`(" + message.member.id + ")`",
                    false
                ], [
                    await client.strings(message.guild, "cmd.kick.reason"),
                    reason,
                    false
                ]
            ];
            target.kick(reason).then(async () => {
                return client.embeds.uni(message.channel, "", await client.strings(message.guild, "cmd.kick.kicked"), contents, "", UserGotAvatar, client.config.colors.default, null);
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }
    }
};
