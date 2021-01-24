module.exports = {
    name: 'cmd.shuffle.name',
    description: 'cmd.shuffle.description',
    usage: 'cmd.shuffle.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        try {
            if (!serverQueue)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.shuffle.noqueue'));
            if (!voiceChannel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.shuffle.nochannel'));
            if (voiceChannel !== message.guild.me.voice.channel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.shuffle.nochannel_bot'));
            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', async (error, result) => {
                if (error)
                    return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].dj_id == null)
                    return shuffle();
                const role = message.guild.roles.cache.get(result[0].dj_id);
                if (message.member.roles.cache.has(role.id) || message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('MANAGE_MESSAGES') || client.config.secrets.developers.includes(message.author.id))
                    return shuffle();
                else
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'dj.perms_missing')).replace('$user', message.member.user.tag).replace('$role', role));
                async function shuffle() {
                    const songs = serverQueue.songs;
                    client.functions.shuffleSongs(songs);
                    serverQueue.songs = songs;
                    client.queue.set(message.guild.id, serverQueue);
                    await message.react('🔀');
                }
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
