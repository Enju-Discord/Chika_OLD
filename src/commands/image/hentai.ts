import * as axios from "axios";

module.exports = {
    name: "cmd.hentai.name",
    description: "cmd.hentai.description",
    usage: "cmd.hentai.usage",
    args: true,
    dm: false,
    group: "Image",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {    
        const result: axios.AxiosResponse = await axios.default.get("http://api.nekos.fun:8080/api/neko");
        const image: string = result.data.image;
        const randomcolor: string = "#" + ((1 << 24) * Math.random() | 0).toString(16);

        if (message.channel.nsfw) {
            try {
                return client.embeds.uni(message.channel, null, null, null, image, null, randomcolor, "⚡️ nekos.fun");
            } catch (error) {
                return client.embeds.error(message.channel, "```js\n" + error + "```");
            }
        } else {
            return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.hentai.nsfw"));
        }
    }
}