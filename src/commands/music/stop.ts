module.exports = {
    name: 'cmd.stop.name',
    description: 'stop.np.description',
    usage: 'cmd.stop.usage',
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
            if (!serverQueue) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.noqueue'));
            if (!voiceChannel) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.nochannel'));
            if (voiceChannel !== message.guild.me.voice.channel) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.pause.nochannel_bot'));

            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
                if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result[0].dj_id == null) return stopmusic();

                const role: any = message.guild.roles.cache.get(result[0].dj_id);

				if (message.member.roles.cache.has(role.id) || message.member.permissions.has('MANAGE_GUILD') || message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('MANAGE_MESSAGES') || client.config.secrets.developers.includes(message.author.id)) return stopmusic();
                else return client.embeds.error(message.channel, (await client.strings(message.guild, 'dj.perms_missing')).replace('$user', message.member.user.tag).replace('$role', role));

                async function stopmusic() {
					if (!serverQueue.playing || serverQueue.playing) {
						if (client.oldsongs.find(msg => msg.guildid === message.guild.id)) {
							client.oldsongs.find(msg => msg.guildid === message.guild.id).message.delete();
							const index: any = client.oldsongs.indexOf(client.oldsongs.find(msg => msg.guildid === message.guild.id));

							if (index > -1) client.oldsongs.splice(index, 1);
						}

						serverQueue.voiceChannel.leave();
						client.queue.delete(message.guild.id);

						return client.embeds.success(message.channel, await client.strings(message.guild, 'cmd.stop.stopped'));
					}
				}
            });
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}