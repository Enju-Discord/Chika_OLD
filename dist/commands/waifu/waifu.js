"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const discord_js_1 = require("discord.js");
module.exports = {
    name: 'cmd.waifu.name',
    description: 'cmd.waifu.description',
    usage: 'cmd.waifu.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        client.con.query("SELECT * FROM own_waifu WHERE userid = ?", [message.author.id], async (erorr, result) => {
            if (!result[0]) {
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifu.nope"));
            }
            else {
                let name;
                client.con.query("SELECT * FROM own_waifu WHERE userid = ? AND active = ?", [message.author.id, "true"], async (erorr, res) => {
                    let name = res[0].name;
                    let second = "";
                    if (result.length >= 2) {
                        client.con.query("SELECT * FROM own_waifu WHERE active = ? AND userid = ?", ["false", message.author.id], async (erorr, result) => {
                            for (const waifus of result) {
                                second += waifus.id + ". " + waifus.name + "\n";
                            }
                        });
                    }
                    else {
                        second = "None";
                    }
                    let health = result[0].health;
                    let strength = result[0].strength;
                    client.con.query("SELECT * FROM cards WHERE name = ?", [name], async (error, result) => {
                        let card = await printCard(result[0].picture, result[0].type, result[0].description, result[0].name, health);
                        let attach = new discord_js_1.MessageAttachment(card);
                        message.channel.send(attach);
                        /*    let contents: Array < any > = [
                                [
                                    await client.strings(message.guild, 'cmd.waifu.name_field'),
                                    result[0].name,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, 'cmd.waifu.type_field'),
                                    result[0].type,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, 'cmd.waifu.health_field'),
                                    health,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, 'cmd.waifu.strength_field'),
                                    strength,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, 'cmd.waifu.second'),
                                    second,
                                    false
                                ],
                                [
                                    await client.strings(message.guild, "cmd.waifu.field_description"),
                                    result[0].description,
                                    false
                                ]
                            ];
                            return client.embeds.uni(message.channel, null, result[0].waifu, contents, result[0].picture,  null, client.config.colors.default, await client.strings(message.guild, 'cmd.waifu.footer'))
                        */
                    });
                });
            }
        });
    }
};
async function printCard(picture, backgroundImage, description, name, health) {
    return new Promise(async (resolve, reject) => {
        await canvas_1.registerFont("./fonts/Exo2-Black.ttf", {
            family: "Exo 2 Black"
        });
        canvas_1.registerFont("./fonts/Bubbleboddy-FatTrial.ttf", {
            family: "Bubbleboddy-1"
        });
        canvas_1.registerFont("./fonts/Bubbleboddy-ExtraLightTrial.ttf", {
            family: "Bubbleboddy"
        });
        console.log("1");
        canvas_1.registerFont("./fonts/Arista-Pro-Alternate-Bold-trial.ttf", {
            family: "Arista"
        });
        console.log("2");
        let canvas = canvas_1.createCanvas(608, 822);
        let ctx = canvas.getContext('2d');
        let cardImage = await canvas_1.loadImage(picture);
        let background = await canvas_1.loadImage("https://cdn.discordapp.com/attachments/669265222023774240/802575922372935680/Common.png");
        ctx.drawImage(cardImage, 47, 118, 558, 625);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.font = "40px 'Exo 2 Black'";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        printAtWordWrap(ctx, name, 57, 85, 40, 490);
        ctx.font = "30px 'Arista'";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        printAtWordWrap(ctx, `Health: ${health}`, 58, 620, 235, 100);
        ctx.font = "20px 'Sans'";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        printAtWordWrap(ctx, description, 57, 660, 20, 490);
        console.log("3");
        resolve(canvas.toBuffer());
    });
}
async function printAtWordWrap(context, text, x, y, lineHeight, fitWidth) {
    fitWidth = fitWidth || 0;
    if (fitWidth <= 0) {
        context.fillText(text, x, y);
        return;
    }
    var words = text.split(' ');
    var currentLine = 0;
    var idx = 1;
    while (words.length > 0 && idx <= words.length) {
        var str = words.slice(0, idx).join(' ');
        var w = context.measureText(str).width;
        if (w > fitWidth) {
            if (idx == 1) {
                idx = 2;
            }
            context.fillText(words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine));
            currentLine++;
            words = words.splice(idx - 1);
            idx = 1;
        }
        else {
            idx++;
        }
    }
    if (idx > 0)
        context.fillText(words.join(' '), x, y + (lineHeight * currentLine));
}
