"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = async (client, guild) => {
    const webhook = new discord_js_1.WebhookClient(client.config.secrets.guildLogsID, client.config.secrets.guildLogsToken);
    const getNewGuildOwner = await client.shard.broadcastEval(`[this.shard.ids, this.users.cache.get("${guild.ownerID}")];`);
    const pickedShard = getNewGuildOwner.find((x) => !!x[1]);
    let ServerIcon = "";
    if (guild.iconURL()) {
        ServerIcon = guild.iconURL({
            dynamic: true,
            size: 1024,
            format: "png"
        });
    }
    const promises = [
        client.shard.fetchClientValues("guilds.cache.size"),
        client.shard.fetchClientValues(`users.cache.size`),
    ];
    Promise.all(promises).then(async (results) => {
        let contents = [
            [
                "Name",
                guild.name,
                true
            ],
            [
                "ID",
                guild.id,
                true
            ],
            [
                "Owner",
                pickedShard[1].tag,
                true
            ],
            [
                "Members",
                client.functions.numberWithCommas(guild.memberCount),
                true
            ],
            [
                "New Membercount",
                client.functions.numberWithCommas(results[1].reduce((x, users) => x + users, 0)),
                true
            ],
            [
                "New Servercount",
                client.functions.numberWithCommas(results[0].reduce((x, guilds) => x + guilds, 0)),
                true
            ]
        ];
        client.con.query("SELECT * FROM guild_settings WHERE id = ?;", [guild.id], async (error, result) => {
            if (result.length === 1)
                return undefined;
            else {
                client.con.query("INSERT INTO guild_settings(id, language, autorole_id, muted_id, dj_id, welcome_id, welcome_msg, bye_id, bye_msg, prefix) VALUES(?, ?, null, null, null, null, null, null, null, ?);", [guild.id, "en_us", client.config.secrets.prefix]);
            }
        });
        client.embeds.uni(webhook, "Joined Server", `Logs`, contents, null, ServerIcon, client.config.colors.logGreen, null);
    });
};
