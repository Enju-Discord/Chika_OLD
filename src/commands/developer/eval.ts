import * as fetch from 'node-fetch';

module.exports = {
    name: 'cmd.eval.name',
    description: 'cmd.eval.description',
    usage: 'cmd.eval.usage',
    args: true,
    dm: true,
    group: 'Bot Owner',
    cooldown: 2,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ['ev'],
    async execute(message: any, args: any, client: any, prefix: any) {

        try {
            let code: string = args.join(' ');
            let evaled: string = await eval(code);
    
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
    
            const options = {
                method: 'POST',
                body: client.functions.clean(evaled),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
    
            let result: any = await fetch(`https://hasteb.in/documents`, options);
            result = await result.json();
    
            if (client.functions.clean(evaled).length > 2000) return client.embeds.uni(message.channel, 'https://hasteb.in/' + result.key, null, null, null, null, client.config.colors.invisible, null);
            else return message.channel.send('a')
        } catch (error) {
            return client.embeds.error(message.channel + '```js\n' + error + '```');
        }
    }
}