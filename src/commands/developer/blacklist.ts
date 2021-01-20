module.exports = {
    name: 'cmd.blacklist.name',
    description: 'cmd.blacklist.description',
    usage: 'cmd.blacklist.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 10,
    bot_permissions: [''],
    user_permissions: [],
    aliases: ['bl'],
    async execute(message: any, args: any, client: any, prefix: any) {
        if(args[0]) {
            let target: any = message.mentions.members.first() || {id: args[0]};
            target = target.id
            if(client.config.secrets.developers.includes(target)) return client.embeds.error(message.channel, "You can't blacklist a Bot Owner.")
            client.con.query("SELECT * FROM `blacklist` WHERE `userid`=?;", [target], async (error: any, result: any) => {
                if(result.length !== 0) {
                    client.con.query("DELETE FROM `blacklist` WHERE `userid`=?;", [target])
                    client.embeds.success(message.channel, "Removed <@"+target+"> (`"+target+"`) from the Blacklist.")
                } else {
                    client.con.query("INSERT INTO `blacklist`(`userid`, `blacklisted`) VALUES (?,?)", [target, "true"])
                    client.embeds.success(message.channel, "Added <@"+target+"> (`"+target+"`) to the Blacklist.")
                }
            })
        } else {
            client.embeds.error(message.channel, "You have to ping the user or give me the UserID.")
        }
    }
}