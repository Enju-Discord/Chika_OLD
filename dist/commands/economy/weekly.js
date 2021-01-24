module.exports = {
    name: 'cmd.weekly.name',
    description: 'cmd.weekly.description',
    usage: 'cmd.weekly.usage',
    args: true,
    dm: true,
    group: 'Economy',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        const newYen = 94000;
        async function addYen(amount) {
            client.con.query('SELECT * FROM economy WHERE id = ?;', [message.author.id], async (error, result) => {
                if (error)
                    return client.embeds.error(message.channel, '```js\n' + error + '```');
                if (result.length === 1) {
                    client.con.query('UPDATE economy SET yen = ? WHERE id = ?;', [Number(result[0].yen) + amount, message.author.id]);
                    return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.weekly.get')).replace('$yen', client.functions.numberWithCommas(amount)).replace('$user', message.author.tag));
                }
                else {
                    client.con.query('INSERT INTO economy(id, yen) VALUES(?, ?);', [message.author.id, amount]);
                    client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.weekly.get')).replace('$yen', client.functions.numberWithCommas(amount)).replace('$user', message.author.tag));
                    return this.execute(message, args, client, prefix);
                }
            });
        }
        client.con.query('SELECT * FROM user_cooldowns WHERE id = ?;', [message.author.id], async (error, result) => {
            if (error)
                return client.embeds.error(message.channel, '```js\n' + error + '```');
            if (result.length === 1) {
                const dateFromDatabase = result[0].weekly;
                const difference = new Date().getTime() - dateFromDatabase;
                if (difference <= 604800000) {
                    let timeLeft;
                    const differenceDate = new Date(604800000 - difference);
                    if (differenceDate.getUTCDate() - 1 === 0) {
                        timeLeft = differenceDate.getUTCHours() + 'h ' + differenceDate.getUTCMinutes() + 'm ' + differenceDate.getUTCSeconds() + 's ';
                    }
                    else if (differenceDate.getUTCHours() === 0) {
                        timeLeft = differenceDate.getUTCMinutes() + 'm ' + differenceDate.getUTCSeconds() + 's ';
                    }
                    else {
                        timeLeft = differenceDate.getUTCDate() - 1 + 'd ' + differenceDate.getUTCHours() + 'h ' + differenceDate.getUTCMinutes() + 'm ' + differenceDate.getUTCSeconds() + 's ';
                    }
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'cmd.weekly.claimed')).replace('$timeleft', timeLeft).replace('$user', message.author.tag));
                }
                else {
                    client.con.query('UPDATE user_cooldowns SET weekly = ? WHERE id = ?;', [new Date(), message.author.id]);
                    return addYen(newYen);
                }
            }
            else {
                client.con.query('INSERT INTO user_cooldowns(id, weekly) VALUES(?, ?);', [message.author.id, new Date()]);
                return addYen(newYen);
            }
        });
    }
};
