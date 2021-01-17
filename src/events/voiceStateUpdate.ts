module.exports = async (client, oldState, newState) => {
    if (newState.guild.me.voice.channel === null) {
        const serverQueue: any = client.queue.get(oldState.guild.id);
        if (serverQueue) {
            if (client.oldsongs.find(msg => msg.guildid === oldState.guild.id)) {
                client.oldsongs.find(msg => msg.guildid === oldState.guild.id).message.delete();
                const index: any = client.oldsongs.indexOf(client.oldsongs.find(msg => msg.guildid === oldState.guild.id));

                if (index > -1) client.oldsongs.splice(index, 1);
            }
            client.queue.delete(oldState.guild.id);
        }
    }
}