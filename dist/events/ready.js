"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
module.exports = async (client) => {
    setInterval(async function () {
        let presences = [{
                text: 'DMs for Support',
                type: 3
            },
            {
                text: 'to the student council',
                type: 3
            }, {
                text: client.commands.filter(cmd => cmd.group != 'Bot Owner').size + ' commands',
                type: 2
            }, {
                text: 'on Shard ' + client.options.shards[0] + ' for ' + client.guilds.cache.size + ' Servers',
                type: 0
            }
        ];
        const random = presences[Math.floor(Math.random() * presences.length)];
        client.user.setActivity(random.text, {
            type: random.type
        });
    }, 10000);
    setInterval(async () => {
        axios_1.default.post("https://api.voidbots.net/bot/stats/742732203955454044", {
            server_count: client.guilds.cache.size,
            shard_count: 0
        }, {
            headers: { Authorization: client.config.secrets.VoidbotsToken }
        });
        axios_1.default.post("https://discordbotlist.com/api/v1/bots/742732203955454044/stats", {
            guilds: client.guilds.cache.size,
            users: client.users.cache.size,
        }, {
            headers: { Authorization: client.config.secrets.DiscordBotlist }
        });
        console.log("Posted Stats");
    }, 300000);
    console.log('READY!');
};
