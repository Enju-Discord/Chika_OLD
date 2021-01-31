import {registerFont, createCanvas, loadImage} from 'canvas'
import { MessageAttachment } from 'discord.js'
import { emotes } from '../../utils/config'
module.exports = {
    name: 'checkcards',
    description: 'Generates all cards for you',
    usage: '`gencards` - generates all card for you',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        let name = args.join(" ").slice(" ")
        client.con.query("SELECT * FROM cards", [name], async (error, result) => {
            if(!result) {
                return message.reply("No.")
            } else {
                let rC = 0
                setInterval(async () => {
                    let res = result[rC]
                    rC++
                    let card: any = await printCard(res.picture, res.type, res.description, res.name, "Test")
                    let attach: MessageAttachment = new MessageAttachment(card)
                    message.channel.send(attach)
                }, 1500)
            }
        })

    }
}



async function printCard(picture, backgroundImage, description, name, health) {
    return new Promise(async (resolve, reject) => {
        
        await registerFont("./fonts/Exo2-Black.ttf", { family: "Exo 2 Black" });
        registerFont("./fonts/Bubbleboddy-FatTrial.ttf", { family: "Bubbleboddy-1" });
        registerFont("./fonts/Bubbleboddy-ExtraLightTrial.ttf", { family: "Bubbleboddy" });
        registerFont("./fonts/Arista-Pro-Alternate-Bold-trial.ttf", {family: "Arista"})
        let canvas = createCanvas(608, 822)
        let ctx = canvas.getContext('2d')

        let cardImage: any = await loadImage(picture);
        let background = await loadImage("https://cdn.discordapp.com/attachments/669265222023774240/802575922372935680/Common.png");
        ctx.drawImage(cardImage, 47, 118, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.font = "40px 'Exo 2 Black'";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        printAtWordWrap(ctx, name, 57, 85, 40, 490)
        ctx.font = "30px 'Arista'";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start"
        printAtWordWrap(ctx, `Health: ${health}`, 58, 620, 235, 100)
        ctx.font = "20px 'Sans'";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        printAtWordWrap(ctx, description, 57, 660, 20, 490)
        resolve(canvas.toBuffer());
    })
}

async function printAtWordWrap(context, text, x, y, lineHeight, fitWidth) {
    fitWidth = fitWidth || 0;
    
    if (fitWidth <= 0) {
        context.fillText( text, x, y );
        return;
    }
    var words = text.split(' ');
    var currentLine = 0;
    var idx = 1;
    while (words.length > 0 && idx <= words.length) {
        var str = words.slice(0,idx).join(' ');
        var w = context.measureText(str).width;
        if ( w > fitWidth ) {
            if (idx==1) {
                idx=2;
            }
            context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
            currentLine++;
            words = words.splice(idx-1);
            idx = 1;
        }
        else {
            idx++;
        }
    }
    if (idx > 0) context.fillText( words.join(' '), x, y + (lineHeight*currentLine));
}