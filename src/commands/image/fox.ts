import * as axios from 'axios';

module.exports = {
    name: 'cmd.fox.name',
    description: 'cmd.fox.description',
    usage: 'cmd.fox.usage',
    args: true,
    dm: true,
    group: 'Image',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        return;
        try {
            const result = await axios.default.get('https://randomfox.ca/floof/');
            const image = result.data.image;
            const randomcolor: string = '#' + ((1 << 24) * Math.random() | 0).toString(16);

            return client.embeds.uni(message.channel, null, null, null, image, null, randomcolor, null);
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}