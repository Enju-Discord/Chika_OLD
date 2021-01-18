import * as os from 'os';
import * as si from 'systeminformation';

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
    async execute(message: any, args: any, client: any, prefix: any) {
        const promises = [
            client.shard.fetchClientValues('guilds.cache.size'),
            client.shard.fetchClientValues(`users.cache.size`),
            client.shard.fetchClientValues('channels.cache.size')
        ];

        Promise.all(promises).then(async results => {
            const contents: Array < any > = [
                [
                    await client.strings(message.guild, 'cmd.info.basics'),
                    (await client.strings(message.guild, 'cmd.info.basics.info')).replace('$users', client.functions.numberWithCommas(results[1].reduce((x, users) => x + users, 0)))
                    .replace('$devs', client.users.cache.get(client.config.secrets.developers[0]).tag + 
                    ', ' + client.users.cache.get(client.config.secrets.developers[1]).tag + 
                    ' and ' + client.users.cache.get(client.config.secrets.developers[2]).tag)
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
}