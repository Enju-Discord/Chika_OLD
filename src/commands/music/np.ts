module.exports = {
    name: 'cmd.np.name',
    description: 'cmd.np.description',
    usage: 'cmd.np.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['nowplaying', 'songinfo'],
    async execute(message: any, args: any, client: any, prefix: any) {
        const serverQueue: any = client.queue.get(message.guild.id);        

        if (!serverQueue) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.noqueue'));

        const bar: any = new client.functions.ProgressBar(serverQueue.connection.player.dispatcher.streamTime, serverQueue.songs[0].durationSecs, 35);
        const length: any = bar.createDurationBar();

        return client.embeds.success(message.channel, `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url}) [${serverQueue.songs[0].requester}]` + '\n' + length);
    }
}