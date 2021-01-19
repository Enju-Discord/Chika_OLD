module.exports = {
    name: 'cmd.server.name',
    description: 'cmd.server.description',
    usage: 'cmd.server.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const findServers: any = await client.shard.broadcastEval(`(this.guilds.cache.find(server => server.name === "${args.join(' ')}") || this.guilds.cache.get("${args.join(' ')}"));`);
        const guild: any = (findServers.find((x) => !!x) || false);

        if (args.join(' ') !== '') {
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
                }`).then(async invite => {
                    return message.channel.send('discord.gg/' + invite[0].code);
                });              
            } catch (error) {
                return client.embeds.error(message.channel, '```js\n' + error + '```');
            }
        }
    }
}