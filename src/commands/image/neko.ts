import * as NekoClient from 'nekos.life';

module.exports = {
    name: 'cmd.neko.name',
    description: 'cmd.neko.description',
    usage: 'cmd.neko.usage',
    args: true,
    dm: true,
    group: 'Image',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        const Neko: NekoClient = new NekoClient.default();
        const image: string = await Neko.sfw.neko().then(async img => img.url);
        const randomcolor: string = '#' + ((1 << 24) * Math.random() | 0).toString(16);

        try {
            return client.embeds.uni(message.channel, null, null, null, image, null, randomcolor, null);
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```');
        }
    }
}