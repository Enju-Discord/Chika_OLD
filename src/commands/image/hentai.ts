import * as NekoClient from 'nekos.life';

module.exports = {
    name: 'cmd.hentai.name',
    description: 'cmd.hentai.description',
    usage: 'cmd.hentai.usage',
    args: true,
    dm: false,
    group: 'Image',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        return;
        const Neko: NekoClient = new NekoClient.default();
        const image: string = await Neko.nsfw.hentai().then(async img => img.url);
        const randomcolor: string = '#' + ((1 << 24) * Math.random() | 0).toString(16);

        if (message.channel.nsfw) {
            try {
                return client.embeds.uni(message.channel, null, null, null, image, null, randomcolor, null);
            } catch (error) {
                return client.embeds.error(message.channel, '```js\n' + error + '```');
            }
        } else {
            return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.hentai.nsfw'));
        }
    }
}