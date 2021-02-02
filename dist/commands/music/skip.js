module.exports = {
    name: "cmd.skip.name",
    description: "cmd.skip.description",
    usage: "cmd.skip.usage",
    args: true,
    dm: false,
    group: "Music",
    cooldown: 10,
    bot_permissions: ["ADD_REACTIONS"],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        try {
            if (!serverQueue)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.skip.noqueue"));
            if (!voiceChannel)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.skip.nochannel"));
            if (voiceChannel !== message.guild.me.voice.channel)
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.skip.nochannel_bot"));
            client.con.query("SELECT * FROM guild_settings WHERE id = ?;", [message.guild.id], async (error, result) => {
                if (error)
                    return client.embeds.error(message.channel, "```js\n" + error + "```");
                const role = message.guild.roles.cache.get(result[0].dj_id);
                if (!serverQueue.playing)
                    return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.skip.pause"));
                const amountSkip = Math.ceil(voiceChannel.members.size / 2);
                if (!serverQueue.songs[0].voteSkips)
                    serverQueue.songs[0].voteSkips = [];
                if (result[0].dj_id == null) {
                    if (serverQueue.songs[0].voteSkips.length >= amountSkip || message.member.permissions.has("MANAGE_GUILD") || message.member.permissions.has("ADMINISTRATOR") || message.member.permissions.has("MANAGE_MESSAGES") || client.config.secrets.developers.includes(message.author.id))
                        return skip();
                    else
                        voteSkip();
                }
                else {
                    return voteSkip();
                }
                async function skip() {
                    await message.react("⏩");
                    return serverQueue.connection.dispatcher.end();
                }
                async function voteSkip() {
                    if (serverQueue.songs[0].voteSkips.length >= amountSkip || message.member.permissions.has("MANAGE_GUILD") || message.member.permissions.has("ADMINISTRATOR") || message.member.permissions.has("MANAGE_MESSAGES") || client.config.secrets.developers.includes(message.author.id))
                        return skip();
                    if (serverQueue.songs[0].voteSkips.includes(message.member.id))
                        return client.embeds.error(message.channel, (await client.strings(message.guild, "cmd.skip.voted")).replace("$user", message.member.user.tag).replace("$votes", serverQueue.songs[0].voteSkips.length + "/" + amountSkip));
                    serverQueue.songs[0].voteSkips.push(message.member.id);
                    client.queue.set(message.guild.id, serverQueue);
                    return client.embeds.success(message.channel, (await client.strings(message.guild, "cmd.skip.votes")).replace("$votes", `${serverQueue.songs[0].voteSkips.length}/${amountSkip}`));
                }
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }
    }
};
