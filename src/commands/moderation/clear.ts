module.exports = {
    name: "cmd.clear.name",
    description: "cmd.clear.description",
    usage: "cmd.clear.usage",
    args: true,
    dm: false,
    group: "Moderation",
    cooldown: 10,
    bot_permissions: ["MANAGE_MESSAGES"],
    user_permissions: ["MANAGE_MESSAGES"],
    aliases: ["purge", "clean"],
    async execute(message: any, args: any, client: any, prefix: any) {
        const deleteCount: number = parseInt(args[0]);

        if (!args[0]) return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.clear.numberrequired"));
        if (isNaN(deleteCount) || args[0].includes("-") || args[0].includes(".") || args[0].includes(",")) return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.clear.NaN"));
        if (deleteCount > 100) return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.clear.length"));

        await message.delete();

        const deletedMessages: any = await message.channel.bulkDelete(deleteCount).catch(async e => {
            if (e.message === "You can only bulk delete messages that are under 14 days old.") {
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.clear.old"));
            }
        });

        if (deletedMessages.size === undefined) return undefined;

        const deleted: any = await client.embeds.success(message.channel, (await client.strings(message.guild, "cmd.clear.deleted")).replace("$messages", deletedMessages.size));

        setTimeout(async () => {
            deleted.delete();
        }, 2000);
    }
}