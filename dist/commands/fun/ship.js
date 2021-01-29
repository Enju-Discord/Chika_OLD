const azurlane = require('@azurapi/azurapi');
module.exports = {
    name: 'cmd.ship.name',
    description: 'cmd.ship.description',
    usage: 'cmd.ship.usage',
    args: true,
    dm: true,
    group: 'Fun',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['azurlane'],
    async execute(message, args, client, prefix) {
        const search = args.join(' ');
        const randomcolor = '#' + ((1 << 24) * Math.random() | 0).toString(16);
        let skills = '';
        try {
            if (args.join(' ') !== '') {
                const ship = await azurlane.getShip(search);
                if (ship.skills.length === 1) {
                    skills = (await client.strings(message.guild, 'cmd.ship.skills.s.1'))
                        .replace('$skill1', ship.skills[0].names.en);
                }
                if (ship.skills.length === 2) {
                    skills = (await client.strings(message.guild, 'cmd.ship.skills.s.2'))
                        .replace('$skill1', ship.skills[0].names.en)
                        .replace('$skill2', ship.skills[1].names.en);
                }
                if (ship.skills.length === 3) {
                    skills = (await client.strings(message.guild, 'cmd.ship.skills.s.3'))
                        .replace('$skill1', ship.skills[0].names.en)
                        .replace('$skill2', ship.skills[1].names.en)
                        .replace('$skill3', ship.skills[2].names.en);
                }
                let contents = [
                    [
                        await client.strings(message.guild, 'cmd.ship.ship.name'),
                        ship.names.en,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.class'),
                        ship.class,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.nationality'),
                        ship.nationality,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.hullType'),
                        ship.hullType,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.rarity'),
                        ship.rarity,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.stars'),
                        ship.stars.stars,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.baseStats'),
                        (await client.strings(message.guild, 'cmd.ship.baseStats.stats'))
                            .replace('$health', ship.stats.baseStats.health)
                            .replace('$armor', ship.stats.baseStats.armor)
                            .replace('$reload', ship.stats.baseStats.reload)
                            .replace('$luck', ship.stats.baseStats.luck)
                            .replace('$firepower', ship.stats.baseStats.firepower)
                            .replace('$torpedo', ship.stats.baseStats.torpedo)
                            .replace('$evasion', ship.stats.baseStats.evasion)
                            .replace('$speed', ship.stats.baseStats.speed)
                            .replace('$antiair', ship.stats.baseStats.antiair)
                            .replace('$aviation', ship.stats.baseStats.aviation)
                            .replace('$oilConsumption', ship.stats.baseStats.oilConsumption)
                            .replace('$accuracy', ship.stats.baseStats.accuracy)
                            .replace('$antisubmarineWarfare', ship.stats.baseStats.antisubmarineWarfare),
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.weapons'),
                        (await client.strings(message.guild, 'cmd.ship.weapons.w'))
                            .replace('$weapon1', ship.slots[1].type)
                            .replace('$weapon2', ship.slots[2].type)
                            .replace('$weapon3', ship.slots[3].type),
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.skills'),
                        skills,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.construction'),
                        ship.construction.constructionTime,
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.misc'),
                        (await client.strings(message.guild, 'cmd.ship.misc.infos'))
                            .replace('$artist', ship.misc.artist.name)
                            .replace('$voice', ship.misc.voice.name),
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.ship.wiki'),
                        '```\n' + ship.wikiUrl + '```',
                        false
                    ]
                ];
                return client.embeds.uni(message.channel, '', ship.names.jp, contents, null, ship.thumbnail, randomcolor, null);
            }
            else {
                return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.ship.namerequired'));
            }
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
