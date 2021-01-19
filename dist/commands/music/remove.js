module.exports = {
    name: 'cmd.remove.name',
    description: 'cmd.remove.description',
    usage: 'cmd.remove.usage',
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
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.remove.noqueue'));
            if (!voiceChannel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.remove.nochannel'));
            if (voiceChannel !== message.guild.me.voice.channel)
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.remove.nochannel_bot'));
            if (isNaN(args[0]))
                return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.remove.validsong'));
            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
                if (error)
                    return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].dj_id == null)
                    return remove();
                const role = message.guild.roles.cache.get(result[0].dj_id);
                if (message.member.roles.cache.has(role.id) || message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('MANAGE_MESSAGES') || client.config.secrets.developers.includes(message.author.id))
                    return remove();
                else
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'dj.perms_missing')).replace('$user', message.member.user.tag).replace('$role', role));
                async function remove() {
                    if (serverQueue.songs.length === 1)
                        return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.remove.validsong'));
                    const song = serverQueue.songs.splice(args[0] - 1, 1);
                    if (song.length < 1)
                        return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.remove.validsong'));
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.remove.removed')).replace('$song', `[${song[0].title}](${song[0].url})`));
                }
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
