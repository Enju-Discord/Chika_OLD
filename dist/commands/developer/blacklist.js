module.exports = {
    name: 'cmd.blacklist.name',
    description: 'cmd.blacklist.description',
    usage: 'cmd.blacklist.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['bl'],
    async execute(message, args, client, prefix) {
        if (args[0]) {
            let target = message.mentions.members.first() || {
                id: args[0]
            };
            target = target.id;
            if (client.config.secrets.developers.includes(target))
                return client.embeds.error(message.channel, 'You can\'t blacklist a Bot Owner.');
            client.con.query('SELECT * FROM blacklist WHERE id = ?;', [target], async (error, result) => {
                if (result.length !== 0) {
                    client.con.query('DELETE FROM blacklist WHERE id = ?;', [target]);
                    return client.embeds.success(message.channel, 'Removed <@' + target + '> (`' + target + '`) from the blacklist.');
                }
                else {
                    client.con.query('INSERT INTO blacklist(id, blacklisted) VALUES(?, ?)', [target, 'true']);
                    return client.embeds.success(message.channel, 'Added <@' + target + '> (`' + target + '`) to the blacklist.');
                }
            });
        }
        else {
            return client.embeds.notice(message.channel, '⚠️ You have to ping a user or give me their ID.');
        }
    }
};
