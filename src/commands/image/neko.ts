import * as axios from 'axios';

module.exports = {
    name: 'cmd.neko.name',
    description: 'cmd.neko.description',
    usage: 'cmd.neko.usage',
    args: true,
    dm: true,
    group: 'Image',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const result: axios.AxiosResponse = await axios.default.get('http://api.nekos.fun:8080/api/neko');
        const image: string = result.data.image;
        const randomcolor: string = '#' + ((1 << 24) * Math.random() | 0).toString(16);

        try {
            return client.embeds.uni(message.channel, null, null, null, image, null, randomcolor, '⚡️ nekos.fun');
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}