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

        function clean(text: string) {
            if (typeof (text) === 'string') {
                return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
            } else {
                return text;
            }
        }

        try {
            let code: string = args.join(' ');
            let evaled: string = await eval(code);
    
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
    
            const options = {
                method: 'POST',
                body: clean(evaled),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
    
            let result: any = await fetch(`https://hasteb.in/documents`, options);
            result = await result.json();
    
            if (clean(evaled).length > 2000) return client.embeds.uni(message.channel, 'https://hasteb.in/' + result.key, null, null, null, null, client.config.colors.invisible, null);
            else return client.embeds.success(message.channel, '```js\n' + clean(evaled) + '```');
        } catch (error) {
            return client.embeds.error(message.channel + '```js\n' + error + '```');
        }
    }
}