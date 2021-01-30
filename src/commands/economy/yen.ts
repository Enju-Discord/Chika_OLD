module.exports = {
    name: 'cmd.yen.name',
    description: 'cmd.yen.description',
    usage: 'cmd.yen.usage',
    args: true,
    dm: false,
    group: 'Economy',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['money', 'balance'],
    async execute(message: any, args: any, client: any, prefix: any) {
        const target: any = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        client.con.query('SELECT * FROM economy WHERE id = ?;', [target.id], async (error: any, result: any) => {
            if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');
            if (result.length === 1) {
                return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.yen.result')).replace('$yen', client.functions.numberWithCommas(result[0].yen)).replace('$user', target.user.tag));
            } else {
                client.con.query('INSERT INTO economy(id, yen) VALUES(?, ?);', [target.id, 0]);
                return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.yen.result')).replace('$yen', client.functions.numberWithCommas(result[0].yen)).replace('$user', target.user.tag));
            }
        });
    }
}