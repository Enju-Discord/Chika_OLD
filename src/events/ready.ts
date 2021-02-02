import axios from 'axios';
import top from 'dblapi.js'
import {
    WebhookClient
} from 'discord.js'

module.exports = async client => {
    const dbl: any = new top(client.config.secrets.DBL, {
        webhookPort: 5000,
        webhookAuth: client.config.secrets.DBLAuth
    });
    const webhookVote: WebhookClient = new WebhookClient(client.config.secrets.voteLogsID, client.config.secrets.voteLogsToken);

    setInterval(async function () {
        let presences = [{
                text: 'DMs for Support',
                type: 3
            },
            {
                text: 'to the student council',
                type: 3
            }, {
                text: client.config.secrets.prefix + 'help',
                type: 3
            }, {
                text: client.commands.filter(cmd => cmd.group != 'Bot Owner').size + ' commands',
                type: 2
            }, {
                text: 'on Shard ' + client.options.shards[0] + ' for ' + client.guilds.cache.size + ' servers',
                type: 0
            }
        ];
        const random: any = presences[Math.floor(Math.random() * presences.length)];
        client.user.setActivity(random.text, {
            type: random.type
        });
    }, 10000);

    setInterval(async () => {
        // axios.post('https://api.voidbots.net/bot/stats/742732203955454044', 
        // {
        //    server_count: client.guilds.cache.size,
        //    shard_count: 0 
        // }, 
        // {
        //     headers: {Authorization: client.config.secrets.VoidbotsToken}
        // });
        axios.post('https://discordbotlist.com/api/v1/bots/742732203955454044/stats', {
            guilds: client.guilds.cache.size
        }, {
            headers: {
                Authorization: client.config.secrets.DiscordBotlist
            }
        });
        dbl.postStats(client.guilds.cache.size);
    }, 120000);

    dbl.webhook.on('ready', hook => {
        console.log('Vote Webhook ready!');
    });

    dbl.webhook.on('vote', vote => {
        client.con.query('SELECT * FROM economy WHERE id = ?;', [vote.user], async (error: any, result: any) => {
            client.embeds.uni(webhookVote, `<@${vote.user}> has voted!`, null, null, null, null, null, null);
            if (result.length === 1) {
                client.con.query('UPDATE economy SET yen = ? WHERE id = ?;', [Number(result[0].yen) + 10000, vote.user]);
                return

            } else {
                client.con.query('INSERT INTO economy(id, yen) VALUES(?, ?);', [vote.user, 10000]);
                return;
            }
        });
        console.log(`${vote.user} has voted!`);
    });
    console.log('READY!');
}