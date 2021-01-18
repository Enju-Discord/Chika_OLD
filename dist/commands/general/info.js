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
const os = __importStar(require("os"));
const si = __importStar(require("systeminformation"));
module.exports = {
    name: 'cmd.info.name',
    description: 'cmd.info.description',
    usage: 'cmd.info.usage',
    args: true,
    dm: true,
    group: 'General',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ['botinfo', 'stats', 'support', 'invite'],
    async execute(message, args, client, prefix) {
        const promises = [
            client.shard.fetchClientValues('guilds.cache.size'),
            client.shard.fetchClientValues(`users.cache.size`),
            client.shard.fetchClientValues('channels.cache.size')
        ];
        Promise.all(promises).then(async (results) => {
            const contents = [
                [
                    await client.strings(message.guild, 'cmd.info.basics'),
                    (await client.strings(message.guild, 'cmd.info.basics.info')).replace('$users', client.functions.numberWithCommas(results[1].reduce((x, users) => x + users, 0)))
                        .replace('$guilds', client.functions.numberWithCommas(results[0].reduce((x, guilds) => x + guilds, 0)))
                        .replace('$uptime', client.functions.getUptime(client.uptime)).replace('$ping', Math.round(client.ws.ping) + 'ms').replace('$client', client.user.username),
                    false
                ],
                [
                    await client.strings(message.guild, 'cmd.info.resources'),
                    (await client.strings(message.guild, 'cmd.info.resources.info')).replace('$usage', `\`\`` + Math.round((await si.currentLoad()).currentload) + '%' + `\`\``)
                        .replace('$usage2', `\`\`` + ((os.totalmem() - os.freemem()) / 1.074e+9).toFixed(2) + 'GiB' + `\`\``).replace('$usage3', `\`\`` + (os.totalmem() / 1.074e+9).toFixed(2) + 'GiB' + `\`\``),
                    false
                ],
                [
                    await client.strings(message.guild, 'cmd.info.support'),
                    (await client.strings(message.guild, 'cmd.info.support.info')).replace('$link', '**' + 'https://discord.gg/xqTKXh3DBN' + '**'),
                    false
                ],
                [
                    await client.strings(message.guild, 'cmd.info.invite'),
                    '**' + await client.generateInvite(2147483647) + '**',
                    false
                ]
            ];
            return client.embeds.uni(message.channel, null, null, contents, null, client.user.avatarURL({
                dynamic: true,
                size: 1024,
                format: 'png'
            }), client.config.colors.default, null);
        });
    }
};
