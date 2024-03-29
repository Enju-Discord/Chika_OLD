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
const moment = __importStar(require("moment"));
module.exports = {
    name: "cmd.serverinfo.name",
    description: "cmd.serverinfo.description",
    usage: "cmd.serverinfo.usage",
    args: true,
    dm: false,
    group: "Utility",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ["guildinfo", "si", "gi"],
    async execute(message, args, client, prefix) {
        let UserGotColor = "";
        let ServerIcon = "";
        let IconForEmbed = "";
        let SplashIcon = "";
        let ServerPerks = "";
        let TimeCreated = "";
        let verificationLevel = "";
        if (message.member.roles.highest.color === 0)
            UserGotColor = client.config.colors.default;
        else
            UserGotColor = message.member.roles.highest.color;
        if (message.guild.iconURL()) {
            ServerIcon = message.guild.iconURL({
                dynamic: true,
                size: 1024,
                format: "png"
            });
        }
        if (message.guild.iconURL()) {
            IconForEmbed = message.guild.iconURL({
                dynamic: true,
                size: 1024,
                format: "png"
            });
        }
        else
            IconForEmbed = await client.strings(message.guild, "cmd.serverinfo.noservericon");
        if (message.guild.splashURL()) {
            SplashIcon = message.guild.splashURL({
                dynamic: true,
                size: 1024,
                format: "png"
            });
        }
        else
            SplashIcon = await client.strings(message.guild, "cmd.serverinfo.nosplashicon");
        client.con.query("SELECT * FROM guild_settings WHERE id = ?;", [message.guild.id], async (error, result) => {
            if (result[0].language === "en_us") {
                moment.locale("en");
                TimeCreated = moment.default(message.guild.createdAt).format("LLLL") + "\n" + moment.default(message.guild.createdAt, "YYYYMMDD").fromNow();
                verificationLevel = client.config.verification.EN[message.guild.verificationLevel];
                if (message.guild.features.length > 0) {
                    message.guild.features.forEach(gF => {
                        ServerPerks += client.config.features.EN[gF] + ", ";
                    });
                    ServerPerks = ServerPerks.substring(0, ServerPerks.length - 2);
                }
                else
                    ServerPerks = "-";
                return undefined;
            }
            if (result[0].language === "de_de") {
                moment.locale("de");
                TimeCreated = moment.default(message.guild.createdAt).format("LLLL") + "\n" + moment.default(message.guild.createdAt, "YYYYMMDD").fromNow();
                verificationLevel = client.config.verification.DE[message.guild.verificationLevel];
                if (message.guild.features.length > 0) {
                    message.guild.features.forEach(gF => {
                        ServerPerks += client.config.features.DE[gF] + ", ";
                    });
                    ServerPerks = ServerPerks.substring(0, ServerPerks.length - 2);
                }
                else
                    ServerPerks = "-";
                return undefined;
            }
        });
        let contents = [
            [
                await client.strings(message.guild, "cmd.serverinfo.id"),
                message.guild.id,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.owner"),
                message.guild.owner.user.tag,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.verification"),
                verificationLevel,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.members"),
                message.guild.memberCount,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.humans"),
                message.guild.members.cache.filter(members => !members.user.bot).size,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.bots"),
                message.guild.members.cache.filter(members => members.user.bot).size,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.text"),
                message.guild.channels.cache.filter(channel => channel.type === "text").size,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.voice"),
                message.guild.channels.cache.filter(channel => channel.type === "voice").size,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.region"),
                message.guild.region,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.boostlevel"),
                message.guild.premiumTier,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.boosts"),
                message.guild.premiumSubscriptionCount,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.created"),
                TimeCreated,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.roles"),
                message.guild.roles.cache.size,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.emojis"),
                message.guild.emojis.cache.size,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.features"),
                ServerPerks,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.iconURL"),
                IconForEmbed,
                true
            ],
            [
                await client.strings(message.guild, "cmd.serverinfo.splashURL"),
                SplashIcon,
                true
            ]
        ];
        return client.embeds.uni(message.channel, null, message.guild.name, contents, null, ServerIcon, UserGotColor, null);
    }
};
