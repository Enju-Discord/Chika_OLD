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
exports.Chika = void 0;
const discord_js_1 = require("discord.js");
const Database_1 = require("./Database");
const config = __importStar(require("../utils/config"));
const functions = __importStar(require("../utils/functions"));
const embeds = __importStar(require("../structures/Embeds"));
class Chika extends discord_js_1.Client {
    constructor(options = {}) {
        super({
            disableMentions: 'everyone',
            shardCount: 1,
            ws: {
                intents: discord_js_1.Intents.ALL
            }
        });
        this.commands = new discord_js_1.Collection();
        this.cooldowns = new discord_js_1.Collection();
        this.queue = new Map();
        this.con = Database_1.connection;
        this.config = config;
        this.functions = functions;
        this.embeds = embeds;
        this.oldsongs = new Array();
    }
    strings(guild, strings) {
        return new Promise((resolve, reject) => {
            if (!guild) {
                const languageSelected = require('../utils/languages/en_us.js');
                resolve(languageSelected.default[strings]);
                return undefined;
            }
            Database_1.connection.query('SELECT * FROM guild_settings WHERE id = ?;', [guild.id], async (error, result) => {
                let language;
                if (!result[0]) {
                    language = 'en_us';
                    Database_1.connection.query('INSERT INTO guild_settings(id, language) VALUES(?, ?);', [guild.id, language]);
                }
                else {
                    language = result[0].language;
                }
                const languageSelected = require('../utils/languages/' + language + '.js');
                resolve(languageSelected.default[strings]);
            });
        });
    }
}
exports.Chika = Chika;
