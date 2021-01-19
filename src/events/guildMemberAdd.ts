module.exports = async (client, member) => {
    client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [member.guild.id], async (error: any, result: any) => {
        if (result[0].length === 0 || result[0].welcome_id == null) return undefined;
        else {
            try {
                const channel: any = member.guild.channels.cache.get(result[0].welcome_id);
                return channel.send(result[0].welcome_msg.replace('$user', `${member.user.tag} (${member})`).replace('$guild', member.guild.name));
            } catch (error) {
                return undefined;
            }
        }
    });

    client.con.query('SELECT * FROM guild_settings WHERE id = ?;', [member.guild.id], async (error: any, result: any) => {
        if (result.length === 0) return undefined;
        else {
            if (result[0].autorole_id == null) return undefined;
            member.roles.add(result[0].autorole_id).catch(async error => {
                return undefined;
            });
        }
    });
}