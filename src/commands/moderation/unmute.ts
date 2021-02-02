module.exports = {
    name: "cmd.unmute.name",
    description: "cmd.unmute.description",
    usage: "cmd.unmute.usage",
    args: true,
    dm: false,
    group: "Moderation",
    cooldown: 10,
    bot_permissions: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
    user_permissions: ["MANAGE_MESSAGES"],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const target: any = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let reason: string = args.slice(1).join(" ");
        let UserGotAvatar: string = "";

        try {
            if (!args[0]) return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.unmute.userrequired"));
            if (!target) return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.unmute.usernotfound"));
            if (target.roles.highest.position >= message.guild.me.roles.highest.position) return client.embeds.error(message.channel, (await client.strings(message.guild, "cmd.unmute.perms")).replace("$user", target.user.tag));

            client.con.query("SELECT * FROM guild_settings WHERE id = ?;", [message.guild.id], async (error: any, result: any) => {
                if (error) return client.embeds.error(message.channel, "```js\n" + error + "```");
                if (result[0].muted_id == null) return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.unmute.rolemissing"));

                const muterole: any = message.guild.roles.cache.get(result[0].muted_id);

                if (muterole.position >= message.guild.me.roles.highest.position) return client.embeds.error(message.channel, (await client.strings(message.guild, "cmd.unmute.perms")).replace("$user", target.user.tag));

                if (!reason) reason = "No reason provided";

                if (target.user.avatarURL()) {
                    UserGotAvatar = target.user.avatarURL({
                        dynamic: true,
                        size: 1024,
                        format: "png"
                    });
                } else {
                    UserGotAvatar = target.user.defaultAvatarURL;
                }

                let contents: Array < any > = [
                    [
                        await client.strings(message.guild, "cmd.unmute.user"),
                        target.user.tag + " " + "`(" + target.id + ")`",
                        false
                    ],
                    [
                        await client.strings(message.guild, "cmd.unmute.moderator"),
                        message.member.user.tag + " " + "`(" + message.member.id + ")`",
                        false
                    ],
                    [
                        await client.strings(message.guild, "cmd.unmute.reason"),
                        reason,
                        false
                    ]
                ];

                if (!target.roles.cache.has(muterole.id)) {
                    return client.embeds.error(message.channel, (await client.strings(message.guild, "cmd.unmute.notmuted")).replace("$user", target.user.tag));
                } else {
                    target.roles.remove(muterole.id, reason);
                    return client.embeds.uni(message.channel, "", await client.strings(message.guild, "cmd.unmute.unmuted"), contents, "", UserGotAvatar, client.config.colors.default, null);
                }
            });
        } catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }
    }
}