module.exports = {
    name: 'cmd.skipto.name',
    description: 'cmd.skipto.description',
    usage: 'cmd.skipto.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS', 'ADD_REACTIONS'],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        try {
            if (!serverQueue)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.skipto.noqueue'));
            if (!voiceChannel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.skipto.nochannel'));
            if (voiceChannel !== message.guild.me.voice.channel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.skipto.nochannel_bot'));
            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
                if (error)
                    return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].dj_id == null)
                    return skipto();
                const role = message.guild.roles.cache.get(result[0].dj_id);
                if (message.member.roles.cache.has(role.id) || message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('MANAGE_MESSAGES') || client.config.secrets.developers.includes(message.author.id))
                    return skipto();
                else
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'dj.perms_missing')).replace('$user', message.member.user.tag).replace('$role', role));
                async function skipto() {
                    if (!serverQueue.playing)
                        return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.skipto.pause'));
                    if (serverQueue.songs.length < args[0])
                        return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.skipto.nosongs'));
                    else {
                        if (isNaN(args[0])) {
                            return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.skipto.number'));
                        }
                        else {
                            serverQueue.playing = true;
                            serverQueue.songs = serverQueue.songs.slice(args[0] - 2);
                            serverQueue.connection.dispatcher.end();
                            await message.react('⏩');
                        }
                    }
                }
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
