module.exports = async (client, member) => {
    return undefined;
    // client.con.query("SELECT * FROM guild_settings WHERE id = ?;", [member.guild.id], async (error: any, result: any) => {
    //     if (result[0].length === 0 || result[0].bye_id == null) return undefined;
    //     else {
    //         try {
    //             const channel: any = member.guild.channels.cache.get(result[0].bye_id);
    //             return channel.send(result[0].bye_msg.replace("$user", `${member.user.tag} (${member})`).replace("$guild", member.guild.name));
    //         } catch (error) {
    //             return undefined;
    //         }
    //     }
    // });
};
