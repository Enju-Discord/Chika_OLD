import {
	Chika
} from "./structures/Client";
import * as config from "./utils/config";
import * as fs from "fs";
import {
	join
} from "path";

const client: Chika = new Chika();

const Constants: any = require("../node_modules/discord.js/src/util/Constants");
Constants.DefaultOptions.ws.properties.$browser = "Discord Android";

console.log("Commands loading");
for (const folder of fs.readdirSync(join(__dirname, "commands"))) {
	for (const file of fs.readdirSync(join(__dirname, `commands/${folder}`))) {
		console.log("- Loading command " + file.split(".")[0]);
		const command: any = require(join(__dirname, `commands/${folder}/${file}`));
		client.commands.set(file.split(".")[0], command);
	}
}

console.log("Events loading");
for (const file of fs.readdirSync(join(__dirname, "events"))) {
	console.log("- Loading event " + file.split(".")[0]);
	const event: any = require(join(__dirname, `events/${file}`));
	const eventName: any = file.split(".")[0];
	client.on(eventName, event.bind(null, client));
}

if (config.secrets.runOnDev == true) {
	client.login(config.secrets.devToken);
} else {
	client.login(config.secrets.token);
}