"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uni = exports.success = exports.notice = exports.dev = exports.error = void 0;
const discord_js_1 = require("discord.js");
const config = __importStar(require("../utils/config"));
function error(channel, description) {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(config.colors.error)
        .setTitle("Error")
        .setDescription(description || "")
        .setTimestamp();
    return channel.send(embed);
}
exports.error = error;
function dev(channel, description) {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(config.colors.dev)
        .setDescription(description || "")
        .setTimestamp();
    return channel.send(embed);
}
exports.dev = dev;
function notice(channel, description) {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(config.colors.notice)
        .setDescription(description || "")
        .setTimestamp();
    return channel.send(embed);
}
exports.notice = notice;
function success(channel, description) {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(config.colors.default)
        .setDescription(description || "")
        .setTimestamp();
    return channel.send(embed);
}
exports.success = success;
function uni(channel, description, title, contents, image, thumbnail, color, footer) {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(color || config.colors.standard)
        .setTitle(title || "")
        .setDescription(description || "")
        .setThumbnail(thumbnail || "")
        .setImage(image || "");
    if (footer === null) {
        embed.setFooter("");
    }
    else {
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
exports.uni = uni;
