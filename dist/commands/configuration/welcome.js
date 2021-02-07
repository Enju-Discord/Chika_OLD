module.exports = {
    name: "cmd.welcome.name",
    description: "cmd.welcome.description",
    usage: "cmd.welcome.usage",
    args: true,
    dm: false,
    group: "Configuration",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: ["MANAGE_GUILD"],
    aliases: ["hello"],
    async execute(message, args, client, prefix) {
        client.con.query("SELECT * FROM guild_settings WHERE id = ?;", [message.guild.id], async (error, result) => {
            if (error)
                return client.embeds.error(message.channel, "```js\n" + error + "```");
            if (!args[0]) {
                if (result[0] && result[0].welcome_id != null) {
                    let contents = [
                        [
                            await client.strings(message.guild, "cmd.welcome.currentchan"),
                            message.guild.channels.cache.get(result[0].welcome_id),
                            true
                        ],
                        [
                            await client.strings(message.guild, "cmd.welcome.currentmsg"),
                            result[0].welcome_msg,
                            true
                        ]
                    ];
                    return client.embeds.uni(message.channel, null, null, contents, null, null, client.config.colors.default, null);
                }
                else {
                    return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.welcome.channelrequired"));
                }
            }
            if (args[0].toLowerCase() === "delete") {
                client.con.query("UPDATE guild_settings SET welcome_id = ?, welcome_msg = ? WHERE id = ?;", [null, null, message.guild.id]);
                return client.embeds.success(message.channel, await client.strings(message.guild, "cmd.welcome.deleted"));
            }
            let welcome = "";
            const channel = message.mentions.channels.first() || message.guild.channels.cache.find(channel => channel.name === args[0]) || message.guild.channels.cache.get(args[0]);
            if (!channel)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.welcome.channelnotfound"));
            args.shift();
            if (args[1]) {
                welcome = args.join(" ");
                if (welcome.length > 800)
                    return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.welcome.length"));
            }
            else if (args[0] === "reset") {
                welcome = await client.strings(message.guild, "cmd.welcome.message.default");
            }
            else {
                welcome = await client.strings(message.guild, "cmd.welcome.message.default");
            }
            if (result.length === 1) {
                client.con.query("UPDATE guild_settings SET welcome_id = ?, welcome_msg = ? WHERE id = ?;", [channel.id, welcome, message.guild.id]);
                return client.embeds.success(message.channel, (await client.strings(message.guild, "cmd.welcome.set")).replace("$channel", channel));
            }
        });
    }
};
