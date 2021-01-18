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
            //let evaled: string = await client.functions.clean(code);
          // let evaled = (eval(`async (message, client, args) => {${code}}`))(message, client, args);
          let evaled = eval(code)
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            evaled = (evaled).replace('NzQyNzMyMjAzOTU1NDU0MDQ0.XzKZRA._AmkS9xQ6VG7d9RKjToMSKqREFY', 'You tried, but you won't get the token!').replace('Nzk3ODE2Njc5NjU5NzMzMDIz.X_r-rw.b9l9NFT9h2Nqoc59PP_VFdE4ctA', 'You tried, but you won't get the token!')
    
            if (evaled.length > 2000) {
                const options = {
                    method: 'POST',
                    body: (client.functions.clean(evaled)),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                
                //Lasst haste.newtox.de als Server.
                let result: any = await fetch(`https://haste.newtox.de/documents`, options);
                result = await result.json();
                return client.embeds.uni(message.channel, 'https://haste.newtox.de/' + result.key, null, null, null, null, client.config.colors.default, null);
            } 
            else return client.embeds.success(message.channel, '```js\n' + evaled + '```');
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}