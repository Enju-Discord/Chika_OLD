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
const axios = __importStar(require("axios"));
module.exports = {
    name: "cmd.boobs.name",
    description: "cmd.boobs.description",
    usage: "cmd.boobs.usage",
    args: true,
    dm: false,
    group: "Image",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message, args, client, prefix) {
        const result = await axios.default.get("http://api.nekos.fun:8080/api/boobs");
        const image = result.data.image;
        const randomcolor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        if (message.channel.nsfw) {
            try {
                return client.embeds.uni(message.channel, null, null, null, image, null, randomcolor, "⚡️ nekos.fun");
            }
            catch (error) {
                return client.embeds.error(message.channel, "```js\n" + error + "```");
            }
        }
        else {
            return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.boobs.nsfw"));
        }
    }
};
