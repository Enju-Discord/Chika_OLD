import axios from 'axios';
import top from 'dblapi.js'

module.exports = async client => {
    const dbl: any = new top(client.config.secrets.DBL, client);

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
        dbl.postStats(client.guilds.cache.size)
    }, 1800000);
    console.log('READY!');
}