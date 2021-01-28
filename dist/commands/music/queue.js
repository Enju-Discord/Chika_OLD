module.exports = {
    name: 'cmd.queue.name',
    description: 'cmd.queue.description',
    usage: 'cmd.queue.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['ADD_REACTIONS'],
    user_permissions: [],
    aliases: ['q'],
    async execute(message, args, client, prefix) {
        const serverQueue = client.queue.get(message.guild.id);
        if (!serverQueue)
            return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.queue.noqueue'));
        let page = 1;
        const songList = serverQueue.songs.map((song, index) => `\`${index + 1}\` ${song.requester} \`[${song.duration}]\` [${song.title}](${song.url})`).join('\n');
        const shortLists = client.functions.shorten(songList, 1000, '\n');
        let contents = [
            [
                'Songs',
                serverQueue.songs.length,
                true
            ]
        ];
        client.embeds.uni(message.channel, shortLists[page - 1], (await client.strings(message.guild, 'cmd.queue.queue')).replace('$server', message.guild.name), contents, null, null, client.config.colors.default, `${page + '/' + shortLists.length}`).then(async (m) => {
            await m.react('⏪');
            await m.react('◀️');
            await m.react('⏹️');
            await m.react('▶️');
            await m.react('⏩');
            const startFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
            const stopFilter = (reaction, user) => reaction.emoji.name === '⏹️' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;
            const endFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
            const start = m.createReactionCollector(startFilter, {
                time: 60000
            });
            const backwards = m.createReactionCollector(backwardsFilter);
            const stop = m.createReactionCollector(stopFilter);
            const forward = m.createReactionCollector(forwardsFilter);
            const end = m.createReactionCollector(endFilter);
            start.on('collect', async (reaction, user) => {
                reaction.users.remove(user);
                if (page === 1)
                    return undefined;
                page = 1;
                const embed = m.embeds[0];
                embed.setDescription(shortLists[page - 1]);
                embed.setFooter(`${page + '/' + shortLists.length}`);
                m.edit(embed).catch(async (error) => {
                    return client.embeds.error(message.channel + '```js\n' + error + '```');
                });
            });
            backwards.on('collect', async (reaction, user) => {
                reaction.users.remove(user);
                if (page === 1)
                    return undefined;
                page--;
                const embed = m.embeds[0];
                embed.setDescription(shortLists[page - 1]);
                embed.setFooter(`${page + '/' + shortLists.length}`);
                m.edit(embed).catch(async (error) => {
                    return client.embeds.error(message.channel + '```js\n' + error + '```');
                });
            });
            stop.on('collect', async (reaction, user) => {
                m.reactions.removeAll();
            });
            forward.on('collect', async (reaction, user) => {
                reaction.users.remove(user);
                if (page === shortLists.length)
                    return undefined;
                page++;
                const embed = m.embeds[0];
                embed.setDescription(shortLists[page - 1]);
                embed.setFooter(`${page + '/' + shortLists.length}`);
                m.edit(embed).catch(async (error) => {
                    return client.embeds.error(message.channel + '```js\n' + error + '```');
                });
            });
            end.on('collect', async (reaction, user) => {
                reaction.users.remove(user);
                if (page === shortLists.length)
                    return undefined;
                page = shortLists.length;
                const embed = m.embeds[0];
                embed.setDescription(shortLists[page - 1]);
                embed.setFooter(`${page + '/' + shortLists.length}`);
                m.edit(embed).catch(async (error) => {
                    return client.embeds.error(message.channel + '```js\n' + error + '```');
                });
            });
            start.on('end', async (reaction, user) => {
                m.reactions.removeAll();
            });
            backwards.on('end', async (reaction, user) => {
                m.reactions.removeAll();
            });
            stop.on('end', async (reaction, user) => {
                m.reactions.removeAll();
            });
            forward.on('end', async (reaction, user) => {
                m.reactions.removeAll();
            });
            end.on('end', async (reaction, user) => {
                m.reactions.removeAll();
            });
        });
    }
};
