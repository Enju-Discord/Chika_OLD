module.exports = {
    name: "cmd.daily.name",
    description: "cmd.daily.description",
    usage: "cmd.daily.usage",
    args: true,
    dm: true,
    group: "Economy",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const newYen: number = 69000;

        async function addYen(amount: number) {
            client.con.query("SELECT * FROM economy WHERE id = ?;", [message.author.id], async (error: any, result: any) => {
                if (error) return client.embeds.error(message.channel, "```js\n" + error + "```");

                if (result.length === 1) {
                    client.con.query("UPDATE economy SET yen = ? WHERE id = ?;", [Number(result[0].yen) + amount, message.author.id]);
                    return client.embeds.success(message.channel, (await client.strings(message.guild, "cmd.daily.get")).replace("$yen", client.functions.numberWithCommas(amount)).replace("$user", message.author.tag));
                } else {
                    client.con.query("INSERT INTO economy(id, yen) VALUES(?, ?);", [message.author.id, amount]);
                    client.embeds.success(message.channel, (await client.strings(message.guild, "cmd.daily.get")).replace("$yen", client.functions.numberWithCommas(amount)).replace("$user", message.author.tag));
                    return this.execute(message, args, client, prefix);
                }
            });
        }

        client.con.query("SELECT * FROM user_cooldowns WHERE id = ?;", [message.author.id], async (error: any, result: any) => {
            if (error) return client.embeds.error(message.channel, "```js\n" + error + "```");

            if (result.length === 1) {
                const dateFromDatabase: any = result[0].daily;
                const difference: number = new Date().getTime() - dateFromDatabase;

                if (difference <= 86400000) {
                    let timeLeft: any;
                    const differenceDate: Date = new Date(86400000 - difference);

                    if (differenceDate.getUTCHours() === 0) {
                        timeLeft = differenceDate.getUTCMinutes() + "m " + differenceDate.getUTCSeconds() + "s ";
                    } else {
                        timeLeft = differenceDate.getUTCHours() + "h " + differenceDate.getUTCMinutes() + "m " + differenceDate.getUTCSeconds() + "s ";
                    }
                    return client.embeds.error(message.channel, (await client.strings(message.guild, "cmd.daily.claimed")).replace("$timeleft", timeLeft).replace("$user", message.author.tag));
                } else {
                    client.con.query("UPDATE user_cooldowns SET daily = ? WHERE id = ?;", [new Date(), message.author.id]);
                    return addYen(newYen);
                }
            } else {
                client.con.query("INSERT INTO user_cooldowns(id, daily) VALUES(?, ?);", [message.author.id, new Date()]);
                return addYen(newYen);
            }
        });
    }
}