"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = __importStar(require("node-fetch"));
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
    async execute(message, args, client, prefix) {
        /*args = await message.content.split(' ').slice(1);
        let msg = message
        let config = client.config
        if (args.join(' ').includes('token'))
            return message.channel.send('Client token access denied');
        try {
            const code = await client.functions.clean(args.join(' '));
            let evaled = (eval(`async (message, client, msg, config, args) => {${code}}`))(message, client, msg, config, args);
            console.log(evaled);
            
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            console.log(evaled);
            
                const embed = new MessageEmbed()
                .setDescription('**Input:**\n```'+code+'```\n***Output:***\n```'+client.functions.clean(evaled)+'```')
                .setColor('#45cbf7');
                message.channel.send(embed);
            } catch (err) {
                const embed = new MessageEmbed()
                .setDescription('***Error:***\n```' + client.functions.clean(err) + '```')
                .setColor('#45cbf7');
                message.channel.send(embed);
            }*/
        try {
            let code = args.join(' ');
            let evaled = await client.functions.clean(code);
            evaled = (eval(`async (message, client, args) => {${code}}`))(message, client, args);
            if (typeof evaled !== 'string')
                evaled = require('util').inspect(evaled);
            if (client.functions.clean(evaled).length > 2000) {
                const options = {
                    method: 'POST',
                    body: client.functions.clean(evaled),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                let result = await fetch(`https://hastebin.com/documents`, options);
                result = await result.json();
                return client.embeds.uni(message.channel, 'https://hasteb.in/' + result.key, null, null, null, null, client.config.colors.invisible, null);
            }
            else
                return client.embeds.success(message.channel, '```js\n' + client.functions.clean(evaled) + '```');
        }
        catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
};
