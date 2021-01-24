module.exports = {
    name: 'cmd.bannedword.name',
    description: 'cmd.bannedword.description',
    usage: 'cmd.bannedword.usage',
    args: true,
    dm: true,
    group: 'Games',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ['-'],
    async execute(message, args, client, prefix) {
        let startmsg = await client.embeds.success(message.channel, "Test");
        let recation1 = startmsg.react("✅");
        const startcollector = startmsg.createReactionCollector((reaction, user) => reaction.emoji.name === "✅" && user.id === message.author.id, { time: 12000 });
        startcollector.on("collect", async (r) => {
            startmsg.delete();
            gamelobby();
        });
        async function gamelobby() {
            let queuemsg = await client.embeds.success(message.channel, "Click to join");
            let reaction2 = await queuemsg.react("✅");
            const queuecollector = queuemsg.createReactionCollector((rec, user) => rec.emoji.name === "✅", { time: 120000 });
            queuecollector.on("collect", async (r) => {
                console.log(r);
            });
        }
    }
};
