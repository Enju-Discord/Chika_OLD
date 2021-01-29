module.exports = {
    name: 'cmd.language.name',
    description: 'cmd.language.description',
    usage: 'cmd.language.usage',
    args: true,
    dm: false,
    group: 'Configuration',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: ['MANAGE_GUILD'],
    aliases: ['lang'],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
            if (error) return client.embeds.error(message.channel, '```js\n' + error + '```');

            if (args.join(' ') === '') {
                if (result[0].language) {
                    if (result[0].language === 'en_us') return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.language.current.en')).replace('$lang', result[0].language));
                    if (result[0].language === 'de_de') return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.language.current.de')).replace('$lang', result[0].language));
                }
            }

            const languages: Array < string > = ['en_us', 'de_de'];
            const lang: string = args[0];

            if (!languages.includes(lang)) return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.language.valid'));

            if (result[0]) {
                client.con.query('UPDATE guild_settings SET language = ? WHERE id = ?;', [lang, message.guild.id]);
                if (args[0] === 'en_us') return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.language.set.en')).replace('$lang', lang));
                if (args[0] === 'de_de') return client.embeds.success(message.channel, (await client.strings(message.guild, 'cmd.language.set.de')).replace('$lang', lang));
            }
        });
    }
}