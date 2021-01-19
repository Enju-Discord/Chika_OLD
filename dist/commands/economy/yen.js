module.exports = {
    name: 'cmd.yen.name',
    description: 'cmd.yen.description',
    usage: 'cmd.yen.usage',
    args: true,
    dm: true,
    group: 'Economy',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ['money', 'balance'],
    async execute(message, args, client, prefix) {
        const target = (message.channel.type === 'dm') ? message.author : (message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member);
        client.con.query('SELECT * FROM economy WHERE id = ?;', [target.id], async (error, result) => {
            if (error)
                return client.embeds.error(message.channel, '```js\n' + error + '```');
            if (result.length === 1) {
                client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.yen.result')).replace('$yen', result[0].yen).replace('$user', target.user.tag));
            }
            else {
                client.con.query('INSERT INTO economy(id, yen) VALUES(?, ?);', [target.id, 0]);
                client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.yen.result')).replace('$yen', result[0].yen).replace('$user', target.user.tag));
            }
        });
    }
};