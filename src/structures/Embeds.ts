import {
    MessageEmbed
} from "discord.js";
import * as config from "../utils/config";

export function error(channel: any, description: any) {
    const embed: MessageEmbed = new MessageEmbed()
        .setColor(config.colors.error)
        .setTitle("Error")
        .setDescription(description || "")
        .setTimestamp();

    return channel.send(embed);
}

export function dev(channel: any, description: any) {
    const embed: MessageEmbed = new MessageEmbed()
        .setColor(config.colors.dev)
        .setDescription(description || "")
        .setTimestamp();

    return channel.send(embed);
}

export function notice(channel: any, description: any) {
    const embed: MessageEmbed = new MessageEmbed()
        .setColor(config.colors.notice)
        .setDescription(description || "")
        .setTimestamp();

    return channel.send(embed);
}

export function success(channel: any, description: any) {
    const embed: MessageEmbed = new MessageEmbed()
        .setColor(config.colors.default)
        .setDescription(description || "")
        .setTimestamp();

    return channel.send(embed);
}

export function uni(channel: any, description: any, title: any, contents: any, image: any, thumbnail: any, color: any, footer: any) {
    const embed: MessageEmbed = new MessageEmbed()
        .setColor(color || config.colors.standard)
        .setTitle(title || "")
        .setDescription(description || "")
        .setThumbnail(thumbnail || "")
        .setImage(image || "")
    if (footer === null) {
        embed.setFooter("");
    } else {
        embed.setFooter(footer);
    }
    embed.setTimestamp();

    if (contents && (typeof contents !== "undefined" || contents !== [])) {
        contents.forEach((element) => {
            embed.addField(element[0], element[1], element[2]);
        });
    }
    return channel.send(embed);
}