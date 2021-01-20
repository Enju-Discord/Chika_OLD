import axios from "axios";
module.exports = async client => {
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
        const random: any = presences[Math.floor(Math.random() * presences.length)];
        client.user.setActivity(random.text, {
            type: random.type
        });
    }, 10000)
    setInterval(async () => {
      /*  axios.post("https://api.voidbots.net/bot/stats/742732203955454044", 
        {
           server_count: client.guilds.cache.size,
           shard_count: 0 
        }, 
        {
            headers: {Authorization: client.config.secrets.VoidbotsToken}
        })
*/
        axios.post("https://discordbotlist.com/api/v1/bots/742732203955454044/stats", {

        guilds: client.guilds.cache.size,
        users: client.users.cache.size,
        },
        {
            headers: {Authorization: client.config.secrets.DiscordBotlist}
        })
        console.log("Posted Stats")
    
    }, 300000)
    console.log('READY!');
}