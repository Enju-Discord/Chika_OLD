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
                intents: Intents.ALL
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

            connection.query('SELECT * FROM guild_settings WHERE id = ?;', [guild.id], async (error: any, result: any) => {
                let language: any;

                if (!result[0]) {
                    language = 'en_us';
                    connection.query('INSERT INTO guild_settings(id, language) VALUES(?, ?);', [guild.id, language]);
                } else {
                    language = result[0].language;
                }

                const languageSelected: any = require('../utils/languages/' + language + '.js');
                resolve(languageSelected.default[strings]);
            });
        });
    }
}