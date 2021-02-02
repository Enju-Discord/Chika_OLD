import {
    WebhookClient
} from "discord.js";

module.exports = {
    name: "cmd.message.name",
    description: "cmd.message.description",
    usage: "cmd.message.usage",
    args: true,
    dm: true,
    group: "Bot Owner",
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: ["sendmsg", "msg", "dm"],
    async execute(message: any, args: any, client: any, prefix: any) {
        const webhook: WebhookClient = new WebhookClient(client.config.secrets.DMLogsID, client.config.secrets.DMLogsToken);
        const user: string = args[0];
        const msg: string = args.slice(1).join(" ");

        try {
            await message.delete();
            const userShards: any = await client.shard.broadcastEval(`[this.shard.ids, this.users.cache.get("${user}")];`);
            const pickedShard: any = userShards.find((x) => !!x[1]);

            await client.shard.broadcastEval(`
            if (this.shard.ids[0] === ${pickedShard[0][0]}) { 
                this.users.cache.get("${user}").send("${msg}");
            }`);
            return client.embeds.success(webhook, pickedShard[1].tag + ": " + msg);
        } catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }
    }
}