module.exports = async (client, member) => {
    client.con.query('SELECT * FROM guild_settings WHERE guildid = ?;', [member.guild.id], async (error: any, result: any) => {
        if (result.length === 0) return undefined;
        else {
            if (result[0].autorole_id == null) return undefined;
            member.roles.add(result[0].autorole_id).catch(async error => {
                return undefined;
            });
        }
    });
}