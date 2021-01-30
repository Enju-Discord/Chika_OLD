"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const discord_js_1 = require("discord.js");
module.exports = {
    name: 'gencard',
    description: 'Generates are card for you',
    usage: '`gencards` - generates are card for you',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['gen'],
    async execute(message, args, client, prefix) {
        let name = args.join(" ").slice(" ");
        client.con.query("SELECT * FROM cards WHERE name = ?", [name], async (error, result) => {
            let card = printCard(result[0].picture, result[0].type, result[0].description, name, result[0].health);
            let attach = new discord_js_1.MessageAttachment(card);
            message.channel.send(attach);
        });
    }
};
async function printCard(picture, backgroundImage, description, name, health) {
    return new Promise(async (resolve, reject) => {
        await canvas_1.registerFont("./fonts/Exo2-Black.ttf", { family: "Exo 2 Black" });
        canvas_1.registerFont("./fonts/Bubbleboddy-FatTrial.ttf", { family: "Bubbleboddy-1" });
        canvas_1.registerFont("./fonts/Bubbleboddy-ExtraLightTrial.ttf", { family: "Bubbleboddy" });
        canvas_1.registerFont("./fonts/Arista-Pro-Alternate-Bold-trial.ttf", { family: "Arista" });
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