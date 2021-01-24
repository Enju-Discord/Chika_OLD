module.exports = {
    name: 'cmd.pause.name',
    description: 'cmd.pause.description',
    usage: 'cmd.pause.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS', 'ADD_REACTIONS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const voiceChannel: any = message.member.voice.channel;
        const serverQueue: any = client.queue.get(message.guild.id);

        try {
            if (!serverQueue) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.noqueue'));
            if (!voiceChannel) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.nochannel'));
            if (voiceChannel !== message.guild.me.voice.channel) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.nochannel_bot'));

            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
                if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].dj_id == null) return pause();

                const role: any = message.guild.roles.cache.get(result[0].dj_id);

				if (message.member.roles.cache.has(role.id) || message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('MANAGE_MESSAGES') || client.config.secrets.developers.includes(message.author.id)) return pause();
                else return client.embeds.error(message.channel, (await client.strings(message.guild, 'dj.perms_missing')).replace('$user', message.member.user.tag).replace('$role', role));

                async function pause() {
                    if (serverQueue.playing === true) {
                        serverQueue.playing = false;
                        serverQueue.connection.dispatcher.pause();
                        await message.react('⏸️');
                    } else {
                        return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.paused_no'));
                    }
                }
            });
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}