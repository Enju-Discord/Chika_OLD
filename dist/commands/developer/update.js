"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const discord_js_1 = require("discord.js");
//git pull git@chika:Chika-Discord/Chika.git && npm i && pm2 restart chika
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
    async execute(message, args, client, prefix) {
        if (process.platform == "linux") {
            let embed = new discord_js_1.MessageEmbed()
                .setTitle("⚠️ Update initiated by " + message.author.tag)
                .setDescription("<a:Loading:800458223891120199> Preparing for update.")
                .setColor(client.config.colors.logYellow);
            let embmsg = await message.channel.send(embed);
            embed.setDescription("<a:Loading:800458223891120199> Pulling changes from GitHub...\n<:idle:507524745378398210> Installing Node Modules...\n<:idle:507524745378398210> Restarting bot...");
            embmsg.edit(embed);
            setTimeout(() => {
                child_process_1.exec("git pull git@chika:Chika-Discord/Chika.git", (err, stdout, stderr) => {
                    if (!err) {
                        setTimeout(() => {
                            embed.setDescription("<:greenTick:718980916449378365> Pulling changes from GitHub...\n<a:Loading:800458223891120199> Installing Node Modules...\n<:idle:507524745378398210> Restarting bot...");
                            embmsg.edit(embed);
                            child_process_1.exec("npm i", (err, stdout, stderr) => {
                                if (!err) {
                                    embed.setDescription("<:greenTick:718980916449378365> Pulling changes from GitHub...\n<:greenTick:718980916449378365> Installing Node Modules...\n<a:Loading:800458223891120199> Restarting bot...");
                                    embmsg.edit(embed);
                                    setTimeout(() => {
                                        embed.setDescription("<:greenTick:718980916449378365> Pulling changes from GitHub...\n<:greenTick:718980916449378365> Installing Node Modules...\n<:greenTick:718980916449378365> Restarting bot...\n\nSuccessfully updated the bot!")
                                            .setColor(client.config.colors.logGreen);
                                        embmsg.edit(embed);
                                        child_process_1.exec("pm2 restart chika", (err, stdout, stderr) => {
                                            if (err) {
                                                embed.setDescription("<:greenTick:718980916449378365> Pulling changes from GitHub...\n<:greenTick:718980916449378365> Installing Node Modules...\n<:redTick:718980916076347423> Restarting bot...\n\nAn unknown error occured while updating the bot.\nUpdate has been canceled.")
                                                    .setColor(client.config.colors.error);
                                                embmsg.edit(embed);
                                            }
                                        });
                                    }, 2500);
                                }
                                else {
                                    embed.setDescription("<:greenTick:718980916449378365> Pulling changes from GitHub...\n<:redTick:718980916076347423> Installing Node Modules...\n<:idle:507524745378398210> Restarting bot...\n\nAn unknown error occured while updating the bot.\nUpdate has been canceled.")
                                        .setColor(client.config.colors.error);
                                    embed.edit(embed);
                                }
                            });
                        }, 2000);
                    }
                    else {
                        embed.setDescription("<:redTick:718980916076347423> Pulling changes from GitHub...\n<:idle:507524745378398210> Installing Node Modules...\n<:idle:507524745378398210> Restarting bot...")
                            .setColor(client.config.colors.error);
                        embmsg.edit(embed);
                    }
                });
            }, 2000);
        }
        else {
            return client.embeds.error(message.channel, "🚫 This Instance is not running on the vServer.");
        }
    }
};
