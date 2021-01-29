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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = __importStar(require("discord.js"));
const moment = __importStar(require("moment"));
module.exports = {
    name: 'cmd.userinfo.name',
    description: 'cmd.userinfo.description',
    usage: 'cmd.userinfo.usage',
    args: true,
    dm: false,
    group: 'Utility',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['memberinfo', 'ui', 'mi'],
    async execute(message, args, client, prefix) {
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let perms = [];
        let badges = [];
        let UserGotColor = '';
        let UserGotNickname = '';
        let UserGotStatus = '';
        let UserGotActivity = '';
        let UserGotAvatar = '';
        let UserClient = '';
        let TimeCreated = '';
        let TimeJoin = '';
        try {
            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error, result) => {
                Object.entries(Discord.Permissions.FLAGS).forEach(perm => {
                    if (target.permissions.has(perm[0])) {
                        if (result[0].language === 'en_us')
                            perms += '`' + client.config.permissions.EN[perm[0]] + '`' + ', ';
                        if (result[0].language === 'de_de')
                            perms += '`' + client.config.permissions.DE[perm[0]] + '`' + ', ';
                    }
                });
                Object.entries(Discord.UserFlags.FLAGS).forEach(flag => {
                    if (target.user.flags == undefined || target.user.flags == 0)
                        badges = '-';
                    else {
                        if (target.user.flags.has(flag[0])) {
                            if (result[0].language === 'en_us')
                                badges += client.config.badges.EN[flag[0]] + '\n';
                            if (result[0].language === 'de_de')
                                badges += client.config.badges.DE[flag[0]] + '\n';
                        }
                    }
                });
                if (target.roles.highest.color === 0)
                    UserGotColor = client.config.colors.default;
                else
                    UserGotColor = target.roles.highest.color;
                if (target.user.username !== target.displayName)
                    UserGotNickname = target.displayName;
                else
                    UserGotNickname = '-';
                if (result[0].language === 'en_us') {
                    moment.locale('en');
                    if (target.user.discriminator === '0001' || target.user.discriminator === '9999' ||
                        target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS') && target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji &&
                            target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji.id ||
                        target.user.avatar && target.user.avatar.startsWith('a_'))
                        badges += client.config.badges.EN.nitro + '\n';
                    if (message.guild.ownerID === target.id)
                        badges += client.config.badges.EN.guildowner + '\n';
                    UserGotStatus = client.config.status.EN[target.user.presence.status];
                    TimeCreated = moment.default(target.user.createdAt).format('LLLL') + '\n' + moment.default(target.user.createdAt, 'YYYYMMDD').fromNow();
                    TimeJoin = moment.default(target.joinedAt).format('LLLL') + '\n' + moment.default(target.joinedAt, 'YYYYMMDD').fromNow();
                }
                if (result[0].language === 'de_de') {
                    moment.locale('de');
                    if (target.user.discriminator === '0001' || target.user.discriminator === '9999' ||
                        target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS') && target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji &&
                            target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji.id ||
                        target.user.avatar && target.user.avatar.startsWith('a_'))
                        badges += client.config.badges.EN.nitro + '\n';
                    if (message.guild.ownerID === target.id)
                        badges += client.config.badges.DE.guildowner + '\n';
                    UserGotStatus = client.config.status.DE[target.user.presence.status];
                    TimeCreated = moment.default(target.user.createdAt).format('LLLL') + '\n' + moment.default(target.user.createdAt, 'YYYYMMDD').fromNow();
                    TimeJoin = moment.default(target.joinedAt).format('LLLL') + '\n' + moment.default(target.joinedAt, 'YYYYMMDD').fromNow();
                }
                if (target.user.presence.activities != false)
                    UserGotActivity = target.user.presence.activities;
                else
                    UserGotActivity = '-';
                if (target.user.avatarURL()) {
                    UserGotAvatar = target.user.avatarURL({
                        dynamic: true,
                        size: 1024,
                        format: 'png'
                    });
                }
                else
                    UserGotAvatar = target.user.defaultAvatarURL;
                if (target.user.presence.clientStatus == null)
                    UserClient = '-';
                else if (target.user.presence.clientStatus.desktop)
                    UserClient = 'Desktop';
                else if (target.user.presence.clientStatus.mobile)
                    UserClient = 'Mobile';
                else if (target.user.presence.clientStatus.web)
                    UserClient = 'Web';
                else
                    UserClient = '-';
                let contents = [
                    [
                        await client.strings(message.guild, 'cmd.userinfo.nameAndDis'),
                        target.user.tag,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.nickname'),
                        UserGotNickname,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.id'),
                        target.id,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.status'),
                        UserGotStatus,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.activity'),
                        UserGotActivity,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.client'),
                        UserClient,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.selfMute'),
                        (await client.strings(message.guild, 'cmd.userinfo.selfMute.options')).replace('$self', `${target.voice.selfMute ? client.config.emotes.yes : client.config.emotes.no}`).replace('$server', `${target.voice.serverMute ? client.config.emotes.yes : client.config.emotes.no}`),
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.selfDeaf'),
                        (await client.strings(message.guild, 'cmd.userinfo.selfDeaf.options')).replace('$self', `${target.voice.selfDeaf ? client.config.emotes.yes : client.config.emotes.no}`).replace('$server', `${target.voice.serverDeaf ? client.config.emotes.yes : client.config.emotes.no}`),
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.roles'),
                        target.roles.cache.sort(client.functions.compare).map(roles => roles).join(', ').substr(0, 1024) || '-',
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.permissions'),
                        perms.substr(0, perms.length - 2),
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.badges'),
                        badges,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.createdAt'),
                        TimeCreated,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.joinedAt'),
                        TimeJoin,
                        true
                    ],
                    [
                        await client.strings(message.guild, 'cmd.userinfo.avatar'),
                        UserGotAvatar,
                        false
                    ]
                ];
                return client.embeds.uni(message.channel, null, target.user.username, contents, null, UserGotAvatar, UserGotColor, null);
            });
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
