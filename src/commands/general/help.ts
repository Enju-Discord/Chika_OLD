module.exports = {
    name: 'cmd.help.name',
    description: 'cmd.help.description',
    usage: 'cmd.help.usage',
    args: true,
    dm: true,
    group: 'General',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ['h', '?', 'man'],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
            if (args !== [] && args[0]) {
                const cmdName: any = args.shift().toLowerCase();
                const cmd: any = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

                if (cmd) {
                    let commandExecutionDM: boolean = null;
                    let bot_permissions: string = '';
                    let user_permissions: string = '';
                    let commandAliases: string = '';

                    prefix = result[0].prefix;

                    if (cmd.dm === false) commandExecutionDM = false;
                    else commandExecutionDM = true;

                    if (cmd.bot_permissions.length > 0) {
                        let bot_permissions_array: string = '';

                        if (result[0].language === 'en_us') bot_permissions_array = cmd.bot_permissions.map(permission => client.config.permissions.EN[permission]).join('\n');
                        bot_permissions = bot_permissions_array;
                        if (result[0].language === 'de_de') bot_permissions_array = cmd.bot_permissions.map(permission => client.config.permissions.DE[permission]).join('\n');
                        bot_permissions = bot_permissions_array;
                    } else bot_permissions = '-';

                    if (cmd.user_permissions.length > 0) {
                        let user_permissions_array: string = '';

                        if (result[0].language === 'en_us') user_permissions_array = cmd.user_permissions.map(perm => client.config.permissions.EN[perm]).join('\n');
                        user_permissions = user_permissions_array;
                        if (result[0].language === 'de_de') user_permissions_array = cmd.user_permissions.map(perm => client.config.permissions.DE[perm]).join('\n');
                        user_permissions = user_permissions_array;
                    } else user_permissions = '-';

                    if (cmd.aliases.length > 0) commandAliases = cmd.aliases.join('\n');
                    else commandAliases = '-';

                    let contents: Array < any > = [
                        [
                            await client.strings(message.guild, 'cmd.help.aliases_field'),
                            commandAliases,
                            false
                        ],
                        [
                            await client.strings(message.guild, 'cmd.help.group_field'),
                            cmd.group,
                            false
                        ],
                        [
                            await client.strings(message.guild, 'cmd.help.dm_field'),
                            commandExecutionDM,
                            false
                        ],
                        [
                            await client.strings(message.guild, 'cmd.help.description_field'),
                            await client.strings(message.guild, cmd.description),
                            false
                        ],
                        [
                            await client.strings(message.guild, 'cmd.help.usage_field'),
                            await client.strings(message.guild, cmd.usage),
                            false
                        ],
                        [
                            'Cooldown',
                            cmd.cooldown + 's',
                            false
                        ],
                        [
                            await client.strings(message.guild, 'cmd.help.bot_permissions_field'),
                            bot_permissions,
                            false
                        ],
                        [
                            await client.strings(message.guild, 'cmd.help.user_permissions_field'),
                            user_permissions,
                            false
                        ]
                    ];
                    return client.embeds.uni(message.channel, null, (await client.strings(message.guild, cmd.name)), contents, null, null, client.config.colors.default, await client.strings(message.guild, 'cmd.help.footer'));
                }
            } else {
                prefix = result[0].prefix;

                let contents: Array < any > = [
                    [
                        await client.strings(message.guild, 'cmd.help.configuration'),
                        client.functions.generateCommands('configuration', prefix),
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.help.developer'),
                        client.functions.generateCommands('developer', prefix),
                        false
                    ],
                    [
                        await client.strings(message.guild, 'cmd.help.economy'),
                        client.functions.generateCommands('economy', prefix),
                        false
                    ],
                    // [
                    //     await client.strings(message.guild, 'cmd.help.fun'),
                    //     client.functions.generateCommands('fun', prefix),
                    //     false
                    // ],
                    [
                        await client.strings(message.guild, 'cmd.help.general'),
                        client.functions.generateCommands('general', prefix),
                        false
                    ],
                    // [
                    //     await client.strings(message.guild, 'cmd.help.image'),
                    //     client.functions.generateCommands('image', prefix),
                    //     false
                    // ],
                    // [
                    //     await client.strings(message.guild, 'cmd.help.moderation'),
                    //     client.functions.generateCommands('moderation', prefix),
                    //     false
                    // ],
                    [
                        await client.strings(message.guild, 'cmd.help.music'),
                        client.functions.generateCommands('music', prefix),
                        false
                    ],
                    // [
                    //     await client.strings(message.guild, 'cmd.help.roleplay'),
                    //     client.functions.generateCommands('roleplay', prefix),
                    //     false
                    // ],
                    [
                        await client.strings(message.guild, 'cmd.help.utility'),
                        client.functions.generateCommands('utility', prefix),
                        false
                    ]
                ];
                return client.embeds.uni(message.channel, null, await client.strings(message.guild, 'cmd.help.title'), contents, null, null, client.config.colors.default, null);
            }
        });
    }
}