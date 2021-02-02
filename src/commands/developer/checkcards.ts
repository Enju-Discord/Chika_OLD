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
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query("SELECT * FROM cards", async (error: any, result: any) => {
            if (!result) {
                return message.reply("No.");
            } else {
                let rC = 0
                setInterval(async () => {
                    let res = result[rC];
                    if (rC >= result.length) return;
                    rC++
                    let card: any = await client.functions.printCard(res.picture, res.type, res.description, res.name, "Test");
                    let attach: MessageAttachment = new MessageAttachment(card);
                    message.channel.send(attach);
                }, 1500)
            }
        });
    }
}