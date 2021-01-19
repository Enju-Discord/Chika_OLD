const KitsuClient = require('kitsu.js');
module.exports = {
    name: 'cmd.anime.name',
    description: 'cmd.anime.description',
    usage: 'cmd.anime.usage',
    args: true,
    dm: true,
    group: 'Fun',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const Kitsu: any = new KitsuClient();

        if (args.join(' ') !== '') {
            Kitsu.searchAnime(args.join(' ')).then(async result => {
                if (result.length === 0) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.anime.noresult'));

                const anime: any = result[0];

                const contents: Array < any > = [
                    [
                        await client.strings(message.guild, 'cmd.anime.information'),
                        (await client.strings(message.guild, 'cmd.anime.information.info')).replace('$jap_name', anime.titles.romaji).replace('$age', anime.ageRating).replace('$nsfw', anime.nsfw ? await client.strings(message.guild, 'cmd.anime.information.nsfw.yes') : await client.strings(message.guild, 'cmd.anime.information.nsfw.no')),
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.anime.stats'),
                        (await client.strings(message.guild, 'cmd.anime.stats.info')).replace('$av_rate', anime.averageRating).replace('$ranked_rate', anime.ratingRank).replace('$pp_rate', anime.popularityRank),
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.anime.status'),
                        (await client.strings(message.guild, 'cmd.anime.status.info')).replace('$episodes', anime.episodeCount ? anime.episodeCount : 'N/A').replace('$start_date', anime.startDate).replace('$end_date', anime.endDate ? anime.endDate : await client.strings(message.guild, 'cmd.anime.status.info.airing')),
                        true
                    ]
                ];
                return client.embeds.uni(message.channel, anime.synopsis.replace(/<[^>]*>/g, null).split('\n')[0].substr(0, 2048), anime.titles.english ? anime.titles.english : args.join(' '), contents, null, anime.posterImage.original, client.vars.colors.default, null);
            }).catch(async error => {
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.anime.noresult'));
            });
        } else {
            return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.anime.animerequired'));
        }
    }
}