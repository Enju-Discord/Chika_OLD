import * as fetch from "node-fetch";

module.exports = {
    name: null,
    description: null,
    usage: null,
    args: true,
    dm: true,
    group: "Bot Owner",
    cooldown: 2,
    bot_permissions: [],
    user_permissions: [],
    aliases: ["ev"],
    async execute(message: any, args: any, client: any, prefix: any) {
        try {
            let code: string = args.join(" ");
            //let evaled: string = await client.functions.clean(code);
            // let evaled = (eval(`async (message, client, args) => {${code}}`))(message, client, args);
            let evaled = eval(code);
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
            evaled = (evaled).replace(client.config.secrets.token, "You tried :3").replace(client.config.secrets.devToken, "You tried :3")

            if (evaled.length > 2000) {
                const options = {
                    method: "POST",
                    body: (client.functions.clean(evaled)),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

                let result: any = await fetch(`https://haste.newtox.de/documents`, options);
                result = await result.json();
                return client.embeds.uni(message.channel, "https://haste.newtox.de/" + result.key, null, null, null, null, client.config.colors.default, null);
            } else return client.embeds.success(message.channel, "```js\n" + evaled + "```");
        } catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }
    }
}