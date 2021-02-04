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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = __importStar(require("node-fetch"));
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
    async execute(message, args, client, prefix) {
        try {
            let code = args.join(" ");
            //let evaled: string = await client.functions.clean(code);
            // let evaled = (eval(`async (message, client, args) => {${code}}`))(message, client, args);
            let evaled = eval(code);
            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
            evaled = (evaled).replace(client.config.secrets.token, "You tried :3").replace(client.config.secrets.devToken, "You tried :3");
            if (evaled.length > 2000) {
                const options = {
                    method: "POST",
                    body: (client.functions.clean(evaled)),
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                let result = await fetch(`https://haste.newtox.de/documents`, options);
                result = await result.json();
                return client.embeds.uni(message.channel, "https://haste.newtox.de/" + result.key, null, null, null, null, client.config.colors.default, null);
            }
            else
                return client.embeds.success(message.channel, "```js\n" + evaled + "```");
        }
        catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }
    }
};
