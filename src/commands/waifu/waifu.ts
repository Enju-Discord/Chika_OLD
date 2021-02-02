import {
    registerFont,
    createCanvas,
    loadImage
} from "canvas";
import {
    MessageAttachment
} from "discord.js";

module.exports = {
    name: "cmd.waifu.name",
    description: "cmd.waifu.description",
    usage: "cmd.waifu.usage",
    args: true,
    dm: true,
    group: "Bot Owner",
    cooldown: 10,
    bot_permissions: ["EMBED_LINKS"],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query("SELECT * FROM own_waifu WHERE userid = ?", [message.author.id], async (erorr: any, result: any) => {
            if (!result[0]) {
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifu.nope"))
            } else {
                let name;
                client.con.query("SELECT * FROM own_waifu WHERE userid = ? AND active = ?", [message.author.id, "true"], async (erorr: any, res: any) => {
                    let name = res[0].name
                    let second = "";
                    if (result.length >= 2) {
                        client.con.query("SELECT * FROM own_waifu WHERE active = ? AND userid = ?", ["false", message.author.id], async (erorr: any, result: any) => {
                            for (const waifus of result) {
                                second += waifus.id + ". " + waifus.name + "\n";
                            }
                        })
                    } else {
                        second = "None"
                    }
                    let health: string = result[0].health
                    let strength = result[0].strength
                    client.con.query("SELECT * FROM cards WHERE name = ?", [name], async (error: any, result: any) => {
                        let card: any = await client.functions.printCard(result[0].picture, result[0].type, result[0].description, result[0].name, health)
                        let attach = new MessageAttachment(card)
                        message.channel.send(attach)
                        /*    let contents: Array < any > = [
                                [
                                    await client.strings(message.guild, "cmd.waifu.name_field"),
                                    result[0].name,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, "cmd.waifu.type_field"),
                                    result[0].type,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, "cmd.waifu.health_field"),
                                    health,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, "cmd.waifu.strength_field"),
                                    strength,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, "cmd.waifu.second"),
                                    second,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, "cmd.waifu.field_description"),
                                    result[0].description,
                                    false
                                ]
                            ];
                            return client.embeds.uni(message.channel, null, result[0].waifu, contents, result[0].picture,  null, client.config.colors.default, await client.strings(message.guild, "cmd.waifu.footer"))
                        */
                    });
                });
            }
        });
    }
}