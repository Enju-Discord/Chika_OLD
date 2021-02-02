module.exports = {
    name: null,
    description: null,
    usage: null,
    args: true,
    dm: true,
    group: "Bot Owner",
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        const findServers = await client.shard.broadcastEval(`(this.guilds.cache.find(server => server.name === "${args.join(" ")}") || this.guilds.cache.get("${args.join(" ")}"));`);
        const guild = (findServers.find((x) => !!x) || false);
        if (args.join(" ") !== "") {
            try {
                await client.shard.broadcastEval(`
                if (this.guilds.cache.get("${guild.id}")) {
                    this.guilds.cache.get("${guild.id}").channels.cache.filter(channel => channel.type === "text").first().createInvite({
                        options: {
                            temporary: false,
                            maxAge: 0,
                            maxUses: 0,
                            unique: false
                        }
                    });
                }`).then(async (invite) => {
                    return message.channel.send("discord.gg/" + invite[0].code);
                });
            }
            catch (error) {
                return client.embeds.error(message.channel, "```js\n" + error + "```");
            }
        }
    }
};
