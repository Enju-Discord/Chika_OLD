module.exports = {
    name: 'cmd.volume.name',
    description: 'cmd.volume.description',
    usage: 'cmd.volume.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ['vol'],
    async execute(message, args, client, prefix) {
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        let bar;
        let volumeBar;
        try {
            if (!serverQueue)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.volume.noqueue'));
            if (!voiceChannel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.volume.nochannel'));
            if (voiceChannel !== message.guild.me.voice.channel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.volume.nochannel_bot'));
            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
                if (error)
                    return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].dj_id == null)
                    return volume();
                const role = message.guild.roles.cache.get(result[0].dj_id);
                if (message.member.roles.cache.has(role.id) || message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('MANAGE_MESSAGES') || client.config.basics.developers.includes(message.author.id))
                    return volume();
                else
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'dj.perms_missing')).replace('$user', message.member.user.tag).replace('$role', role));
                async function volume() {
                    bar = new client.functions.ProgressBar(serverQueue.volume, 200, 10);
                    volumeBar = bar.createVolumeBar();
                    if (!args[0])
                        return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.volume.current')).replace('$volume', serverQueue.volume + '%') + '\n' + volumeBar);
                    if (args[0].includes('-') || args[0].includes('.') || args[0].includes(','))
                        return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.volume.numberrequired'));
                    if (isNaN(args[0]))
                        return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.volume.numberrequired'));
                    if (args[0] > 200)
                        return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.volume.max'));
                    serverQueue.volume = args[0];
                    bar = new client.functions.ProgressBar(serverQueue.volume, 200, 10);
                    volumeBar = bar.createVolumeBar();
                    serverQueue.connection.dispatcher.setVolume(args[0] / 200);
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.volume.set')).replace('$volume', serverQueue.volume + '%') + '\n' + volumeBar);
                }
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
