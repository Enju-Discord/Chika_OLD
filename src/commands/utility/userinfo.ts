import * as Discord from 'discord.js';
import * as moment from 'moment';

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
    async execute(message: any, args: any, client: any, prefix: any) {
        const target: any = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let perms: any = [];
        let badges: any = [];
        let UserGotColor: string = '';
        let UserGotNickname: string = '';
        let UserGotStatus: string = '';
        let UserGotActivity: string = '';
        let UserGotAvatar: string = '';
        let UserClient: string = '';
        let TimeCreated: string = '';
        let TimeJoin: string = '';

        try {
            client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
                Object.entries(Discord.Permissions.FLAGS).forEach(perm => {
                    if (target.permissions.has(perm[0])) {
                        if (result[0].language === 'en_us') perms += '`' + client.config.permissions.EN[perm[0]] + '`' + ', ';
                        if (result[0].language === 'de_de') perms += '`' + client.config.permissions.DE[perm[0]] + '`' + ', ';
                    }
                });
                Object.entries(Discord.UserFlags.FLAGS).forEach(flag => {
                    if (target.user.flags == undefined || target.user.flags == 0) badges = '-';
                    else {
                        if (target.user.flags.has(flag[0])) {
                            if (result[0].language === 'en_us') badges += client.config.badges.EN[flag[0]] + '\n';
                            if (result[0].language === 'de_de') badges += client.config.badges.DE[flag[0]] + '\n';
                        }
                    }
                });

                if (target.roles.highest.color === 0) UserGotColor = client.config.colors.standard;
                else UserGotColor = target.roles.highest.color;

                if (target.user.username !== target.displayName) UserGotNickname = target.displayName;
                else UserGotNickname = '-';

                if (result[0].language === 'en_us') {
                    moment.locale('en');
                    if (
                        target.user.discriminator === '0001' || target.user.discriminator === '9999' ||
                        target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS') && target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji &&
                        target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji.id ||
                        target.user.avatar && target.user.avatar.startsWith('a_')
                    ) badges += client.config.badges.EN.nitro + '\n';
                    if (message.guild.ownerID === target.id) badges += client.config.badges.EN.guildowner + '\n';
                    UserGotStatus = client.config.status.EN[target.user.presence.status];
                    TimeCreated = moment.default(target.user.createdAt).format('LLLL') + '\n' + moment.default(target.user.createdAt, 'YYYYMMDD').fromNow();
                    TimeJoin = moment.default(target.joinedAt).format('LLLL') + '\n' + moment.default(target.joinedAt, 'YYYYMMDD').fromNow();
                }
                if (result[0].language === 'de_de') {
                    moment.locale('de');
                    if (
                        target.user.discriminator === '0001' || target.user.discriminator === '9999' ||
                        target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS') && target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji &&
                        target.user.presence.activities.find(a => a.type === 'CUSTOM_STATUS').emoji.id ||
                        target.user.avatar && target.user.avatar.startsWith('a_')
                    ) badges += client.config.badges.EN.nitro + '\n';
                    if (message.guild.ownerID === target.id) badges += client.config.badges.DE.guildowner + '\n';
                    UserGotStatus = client.config.status.DE[target.user.presence.status];
                    TimeCreated = moment.default(target.user.createdAt).format('LLLL') + '\n' + moment.default(target.user.createdAt, 'YYYYMMDD').fromNow();
                    TimeJoin = moment.default(target.joinedAt).format('LLLL') + '\n' + moment.default(target.joinedAt, 'YYYYMMDD').fromNow();
                }

                if (target.user.presence.activities != false) UserGotActivity = target.user.presence.activities;
                else UserGotActivity = '-';

                if (target.user.avatarURL()) {
                    UserGotAvatar = target.user.avatarURL({
                        dynamic: true,
                        size: 1024,
                        format: 'png'
                    });
                } else UserGotAvatar = target.user.defaultAvatarURL;

                if (target.user.presence.clientStatus == null) UserClient = '-';
                else if (target.user.presence.clientStatus.desktop) UserClient = 'Desktop';
                else if (target.user.presence.clientStatus.mobile) UserClient = 'Mobile';
                else if (target.user.presence.clientStatus.web) UserClient = 'Web';
                else UserClient = '-';

                let contents: Array < any > = [
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
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}