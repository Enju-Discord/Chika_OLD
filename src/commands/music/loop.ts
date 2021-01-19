module.exports = {
    name: 'cmd.loop.name',
    description: 'cmd.loop.description',
    usage: 'cmd.loop.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const voiceChannel: any = message.member.voice.channel;
        const serverQueue: any = client.queue.get(message.guild.id);

        try {
            if (!serverQueue) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.loop.noqueue'));
            if (!voiceChannel) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.loop.nochannel'));
            if (voiceChannel !== message.guild.me.voice.channel) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.loop.nochannel_bot'));

            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
                if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].dj_id == null) return loop();

                const role: any = message.guild.roles.cache.get(result[0].dj_id);

				if (message.member.roles.cache.has(role.id) || message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('MANAGE_MESSAGES') || client.config.secrets.developers.includes(message.author.id)) return loop();
                else return client.embeds.error(message.channel, (await client.strings(message.guild, 'dj.perms_missing')).replace('$user', message.member.user.tag).replace('$role', role));

                async function loop() {
                    serverQueue.loop = !serverQueue.loop;
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.loop.looped')).replace('$looped', serverQueue.loop ? await client.strings(message.guild, 'cmd.loop.enabled') : await client.strings(message.guild, 'cmd.loop.disabled')));
                }
            });
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}