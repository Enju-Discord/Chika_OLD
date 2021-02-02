import * as axios from "axios";

module.exports = {
    name: "cmd.dog.name",
    description: "cmd.dog.description",
    usage: "cmd.dog.usage",
    args: true,
    dm: true,
    group: "Image",
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: [],
    async execute(message: any, args: any, client: any, prefix: any) {
        try {
            const result: axios.AxiosResponse = await axios.default.get("https://random.dog/woof.json");
            const image: string = result.data.url;
            const randomcolor: string = "#" + ((1 << 24) * Math.random() | 0).toString(16);

            return client.embeds.uni(message.channel, null, null, null, image, null, randomcolor, null);
        } catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }
    }
}