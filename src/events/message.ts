import {
    Collection,
    Permissions,
    WebhookClient
} from 'discord.js'

module.exports = async (client, message) => {

    const webhookDM: WebhookClient = new WebhookClient(client.config.secrets.DMLogsID, client.config.secrets.DMLogsToken);
    const webhookCMD: WebhookClient = new WebhookClient(client.config.secrets.CMDLogsID, client.config.secrets.CMDLogsToken);

    client.con.query('SELECT * FROM blacklist WHERE id = ?;', [message.author.id], async (error: any, result: any) => {
        if (result.length === 1) return undefined;
        if (message.channel.type === 'dm') {
            return executeDM();
        } else {
            return executeGuild();
        }
    });

    async function executeDM() {
        if (message.content && message.author.id !== client.user.id && !client.config.secrets.developers.includes(message.author.id)) {
            if (!message.content.startsWith(client.config.secrets.prefix)) return client.embeds.uni(webhookDM, `I recieved a message from ${message.author.tag} (${message.author.id}): ` + message.content, null, null, null, null, client.config.colors.standard, null);
        }
        if (!message.content.startsWith(client.config.secrets.prefix) || message.author.bot) return undefined;

        const args: any = message.content.slice(client.config.secrets.prefix.length).trim().split(' ');
        const cmdName: any = args.shift().toLowerCase();
        const cmd: any = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

        if (!cmd) return undefined;
        if (cmd.group === 'Bot Owner' && !client.config.secrets.developers.includes(message.author.id)) return client.embeds.dev(message.channel, await client.strings(message.guild, 'message.dev'));
        if (cmd.dm === false) return client.embeds.error(message.channel, await client.strings(message.guild, 'message.dm'));
        if (!client.cooldowns.has(cmd.name)) client.cooldowns.set(cmd.name, new Collection());

        const current: number = Date.now();
        const timestamp: any = client.cooldowns.get(cmd.name);
        const cooldown: number = (cmd.cooldown) * 1000;

        if (timestamp.has(message.author.id) && !client.config.secrets.developers.includes(message.author.id)) {
            const wait: any = timestamp.get(message.author.id) + cooldown;

            if (current < wait) {
                const timeLeft: number = (wait - current) / 1000;
                return client.embeds.error(message.channel, (await client.strings(message.guild, 'message.cooldown')).replace('$seconds', timeLeft.toFixed(1)).replace('$cmd', '`' + cmdName + '`'));
            }
        }

        timestamp.set(message.author.id, current);

        setTimeout(async () => {
            timestamp.delete(message.author.id);
        }, cooldown);

        try {
            if (message.author.id !== client.user.id && !client.config.secrets.developers.includes(message.author.id)) client.embeds.uni(webhookCMD, `User ${message.author.tag} (${message.author.id})\nused ${cmdName}\nin DM's`, null, null, null, null, client.config.colors.standard, null);
            cmd.execute(message, args, client, client.config.secrets.prefix);
        } catch (error) {
            return client.embeds.error(message.channel, await client.strings(message.guild, 'message.dm.error'));
        }
    }

    async function executeGuild() {
        client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
            if (error) return console.log(error);
            let startsWithPrefix: boolean = false;
            let prefixToUse: string = '';

            if (result.length === 0) {
                prefixToUse = client.config.secrets.prefix;
                client.con.query('INSERT INTO guild_settings(id, language, autorole_id, muted_id, dj_id, welcome_id, welcome_msg, bye_id, bye_msg, prefix) VALUES(?, ?, null, null, null, null, null, null, null, ?);', [message.guild.id, 'en_us', client.config.secrets.prefix]);
            } else {
                if (message.content.startsWith('<@!' + client.user.id + '>')) {
                    startsWithPrefix = true;
                    prefixToUse = '<@!' + client.user.id + '> ';
                } else {
                    prefixToUse = result[0].prefix;
                }
            }

            if (message.content.startsWith(prefixToUse)) startsWithPrefix = true;

            if (!startsWithPrefix || message.author.bot) return undefined;

            const args: any = message.content.slice(prefixToUse.length).trim().split(' ');
            const cmdName: any = args.shift().toLowerCase();
            const cmd: any = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

            if (!cmd) return undefined;
            if (cmd.group === 'Bot Owner' && !client.config.secrets.developers.includes(message.author.id)) return client.embeds.dev(message.channel, await client.strings(message.guild, 'message.dev'));
            if (!client.cooldowns.has(cmd.name)) client.cooldowns.set(cmd.name, new Collection());

            const current: number = Date.now();
            const timestamp: any = client.cooldowns.get(cmd.name);
            const cooldown: number = (cmd.cooldown) * 1000;

            if (timestamp.has(message.author.id) && !client.config.secrets.developers.includes(message.author.id)) {
                const wait: any = timestamp.get(message.author.id) + cooldown;

                if (current < wait) {
                    const timeLeft: number = (wait - current) / 1000;
                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'message.cooldown')).replace('$seconds', timeLeft.toFixed(1)).replace('$cmd', '`' + cmdName + '`'));
                }
            }

            if (cmd.bot_permissions.length > 0) {
                let bot_permissions_channel: any = message.channel.permissionsFor(message.guild.me);
                bot_permissions_channel = new Permissions(bot_permissions_channel.bitfield);

                if (!bot_permissions_channel.has(cmd.bot_permissions)) {
                    let bot_permissions_filter: any = cmd.bot_permissions.filter(permission => bot_permissions_channel.has(permission) === false);
                    let bot_permissions_missing: string = '';

                    client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {        
                        if (error) return undefined;                
                        if (result[0].language === 'en_us') return bot_permissions_missing = client.functions.generatePermissions(bot_permissions_filter, client.config.permissions.EN);
                        if (result[0].language === 'de_de') return bot_permissions_missing = client.functions.generatePermissions(bot_permissions_filter, client.config.permissions.DE);
                    });

                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'message.bot_permissions_missing')).replace('$permission', bot_permissions_missing));
                }
            }

            if (cmd.user_permissions.length > 0 && !client.config.secrets.developers.includes(message.author.id)) {
                let user_permissions_channel: any = message.channel.permissionsFor(message.member);
                user_permissions_channel = new Permissions(user_permissions_channel.bitfield);

                if (!user_permissions_channel.has(cmd.bot_permissions)) {
                    let user_permissions_filter: any = cmd.user_permissions.filter(permission => user_permissions_channel.has(permission) === false);
                    let user_permissions_missing: string = '';

                    client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [message.guild.id], async (error: any, result: any) => {
                        if (error) return undefined;
                        if (result[0].language === 'en_us') return user_permissions_missing = client.functions.generatePermissions(user_permissions_filter, client.config.permissions.EN);
                        if (result[0].language === 'de_de') return user_permissions_missing = client.functions.generatePermissions(user_permissions_filter, client.config.permissions.DE);
                    });

                    return client.embeds.error(message.channel, (await client.strings(message.guild, 'message.user_permissions_missing')).replace('$permission', user_permissions_missing).replace('$user', message.member.user.username));
                }
            }

            timestamp.set(message.author.id, current);

            setTimeout(async () => {
                timestamp.delete(message.author.id);
            }, cooldown);

            try {
                if (message.author.id !== client.user.id && !client.config.secrets.developers.includes(message.author.id)) client.embeds.uni(webhookCMD, `User ${message.author.tag} (${message.author.id})\nused ${cmdName}\non ${message.guild.name}\nin ${message.channel.name}`, null, null, null, null, client.config.colors.standard, null);
                cmd.execute(message, args, client, prefixToUse);
            } catch (error) {
                console.log(error);
                return client.embeds.error(message.channel, await client.strings(message.guild, 'message.server.error'));
            }
        });
    }
}