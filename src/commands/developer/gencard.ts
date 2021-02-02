import {
    registerFont,
    createCanvas,
    loadImage
} from "canvas";
import {
    MessageAttachment
} from "discord.js";

module.exports = {
    name: null,
    description: null,
    usage: null,
    args: true,
    dm: true,
    group: "Bot Owner",
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: ["gen"],
    async execute(message: any, args: any, client: any, prefix: any) {
        let name = args.join(" ").slice(" ");
        client.con.query("SELECT * FROM cards WHERE name = ?;", [name], async (error, result) => {
            if (!result) {
                return message.reply("No.");
            } else {
                let card: any = await client.functions.printCard(result[0].picture, result[0].type, result[0].description, result[0].name, "Test");
                let attach: MessageAttachment = new MessageAttachment(card);
                message.channel.send(attach);
            }
        });
    }
}