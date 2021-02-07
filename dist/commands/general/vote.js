module.exports = {
    name: "cmd.vote.name",
    description: "cmd.vote.description",
    usage: "cmd.vote.usage",
    args: true,
    dm: true,
    group: "General",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ["support", "upvote", "v"],
    async execute(message, args, client, prefix) {
        client.embeds.success(message.channel, (await client.strings(message.guild, "cmd.vote.use")).replace("$link", "[Click](https://top.gg/bot/742732203955454044/vote)"));
    }
};
