import {
    Client,
    Collection,
    Intents
} from 'discord.js';
import {
    Connection
} from 'mysql2';
import {
    connection
} from './Database';
import * as config from '../utils/config';
import * as functions from '../utils/functions';
import * as embeds from '../structures/Embeds';

export class Chika extends Client {
    public commands: Collection < string, object > ;
    public cooldowns: Collection < string, object > ;
    public queue: Map < string, object > ;
    public con: Connection;
    public config: object;
    public functions: object;
    public embeds: object;
    public oldsongs: Array < number > ;
    constructor(options = {}) {
        super({
            disableMentions: 'everyone',
            shardCount: 1,
            ws: {
                intents: 32511
            }
        });
        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.queue = new Map();
        this.con = connection;
        this.config = config;
        this.functions = functions;
        this.embeds = embeds;
        this.oldsongs = new Array();
    }

    public strings(guild: any, strings: string) {
        return new Promise((resolve, reject) => {
            if (!guild) {
                const languageSelected: any = require('../utils/languages/en_us.js');
                resolve(languageSelected.default[strings]);
                return undefined;
            }

            connection.query('SELECT * FROM settings WHERE guildid = ?;', [guild.id], async (e, r) => {
                let language: any;

                if (!r[0]) {
                    language = 'en_us';
                    connection.query('INSERT INTO settings(guildid, lang) VALUES(?, ?);', [guild.id, language]);
                } else {
                    language = r[0].lang;
                }

                const languageSelected: any = require('../utils/languages/' + language + '.js');
                resolve(languageSelected.default[strings]);
            });
        });
    }
}