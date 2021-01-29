module.exports = {
    name: 'cmd.waifupack.name',
    description: 'cmd.waifupack.description',
    usage: 'cmd.waifupack.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 10,
    bot_permissions: ['ADD_REACTIONS'],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        const price = 30000;
        client.con.query('SELECT * FROM own_waifu WHERE userid = ?;', [message.author.id], async (err, result) => {
            if (result.length === 5) {
                return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.waifupack.already'));
            }
            else {
                client.con.query('SELECT * FROM economy WHERE id = ?;', [message.author.id], async (err, result) => {
                    if (result.length === 0) {
                        client.con.query('INSERT INTO economy(id, yen) VALUES(?, ?);', [message.author.id, 0]);
                        return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.waifupack.nomoney'));
                    }
                    else {
                        if (result[0].yen < price) {
                            return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.waifupack.nomoney'));
                        }
                        else {
                            let emb = await client.embeds.success(message.channel, await client.strings(message.guild, 'cmd.waifupack.buy'));
                            await emb.react('✅');
                        }
                    }
                });
            }
        });
    }
};
async function genRarity() {
    return new Promise(async (resolve, reject) => {
        let r = [{
                'name': 'Legendary',
                'chance': 0.05
            }, {
                'name': 'Mystic',
                'chance': 1
            }, {
                'name': 'Rare',
                'chance': '10'
            }, {
                'name': 'Common',
                'chance': 88.5
            }];
        let rr = [];
        r.forEach((n) => {
            let a = n.chance * 100;
            for (let i = 0; i < a; i++) {
                rr.push(n);
            }
        });
        resolve(rr[Math.floor(Math.random() ** rr.length)].name);
    });
}
