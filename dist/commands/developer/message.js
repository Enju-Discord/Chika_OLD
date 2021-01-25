"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: 'cmd.message.name',
    description: 'cmd.message.description',
    usage: 'cmd.message.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['sendmsg', 'msg', 'dm'],
    async execute(message, args, client, prefix) {
        const webhook = new discord_js_1.WebhookClient(client.config.secrets.DMLogsID, client.config.secrets.DMLogsToken);
        const user = args[0];
        const msg = args.slice(1).join(' ');
        try {
            await message.delete();
            const userShards = await client.shard.broadcastEval(`[this.shard.ids, this.users.cache.get("${user}")];`);
            const pickedShard = userShards.find((x) => !!x[1]);
            await client.shard.broadcastEval(`
            if (this.shard.ids[0] === ${pickedShard[0][0]}) { 
                this.users.cache.get("${user}").send("${msg}");
            }`);
            return client.embeds.success(webhook, pickedShard[1].tag + ' :' + msg);
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
