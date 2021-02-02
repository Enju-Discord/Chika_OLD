module.exports = {
    name: "cmd.waifupack.name",
    description: "cmd.waifupack.description",
    usage: "cmd.waifupack.usage",
    args: true,
    dm: true,
    group: "Bot Owner",
    cooldown: 10,
    bot_permissions: ["ADD_REACTIONS"],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const price: number = 30000;

        client.con.query("SELECT * FROM own_waifu WHERE userid = ?;", [message.author.id], async (err: any, result: any) => {
            if (result.length === 5) {
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifupack.already"));
            } else {
                client.con.query("SELECT * FROM economy WHERE id = ?;", [message.author.id], async (err: any, result: any) => {
                    if (result.length === 0) {
                        client.con.query("INSERT INTO economy(id, yen) VALUES(?, ?);", [message.author.id, 0]);
                        return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifupack.nomoney"));
                    } else {
                        if (result[0].yen < price) {
                            return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifupack.nomoney"));
                        } else {
                            let emb: any = await client.embeds.success(message.channel, await client.strings(message.guild, "cmd.waifupack.buy"));
                            await emb.react("✅");
                        }
                    }
                });
            }
        });
    }
}