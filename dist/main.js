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
const Client_1 = require("./structures/Client");
const config = __importStar(require("./utils/config"));
const fs = __importStar(require("fs"));
const path_1 = require("path");
const client = new Client_1.Chika();
const Constants = require('../node_modules/discord.js/src/util/Constants');
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android';
console.log('Commands loading');
for (const folder of fs.readdirSync(path_1.join(__dirname, 'commands'))) {
    for (const file of fs.readdirSync(path_1.join(__dirname, `commands/${folder}`))) {
        console.log('- Loading command ' + file.split('.')[0]);
        const command = require(path_1.join(__dirname, `commands/${folder}/${file}`));
        client.commands.set(file.split('.')[0], command);
    }
}
console.log('Events loading');
for (const file of fs.readdirSync(path_1.join(__dirname, 'events'))) {
    console.log('- Loading event ' + file.split('.')[0]);
    const event = require(path_1.join(__dirname, `events/${file}`));
    const eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
}
if (config.secrets.runOnDev == true) {
    client.login(config.secrets.devToken);
}
else {
    client.login(config.secrets.token);
}
