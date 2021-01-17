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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const search = __importStar(require("yt-search"));
module.exports = {
    name: 'cmd.play.name',
    description: 'cmd.play.description',
    usage: 'cmd.play.usage',
    args: true,
    dm: false,
    group: 'Music',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS', 'CONNECT', 'SPEAK', 'USE_VAD'],
    user_permissions: [],
    aliases: ['p'],
    async execute(message, args, client, prefix) {
        const voiceChannel = message.member.voice.channel;
        const serverQueue = client.queue.get(message.guild.id);
        let GuildIcon = '';
        if (message.guild.iconURL()) {
            GuildIcon = message.guild.iconURL({
                dynamic: true,
                size: 1024,
                format: 'png'
            });
        }
        if (!voiceChannel)
            return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.play.nochannel'));
        if (!args[0])
            return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.play.linkrequired'));
        const videoRegExp = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
        const playlistRegExp = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/g;
        const spotifyRegExp = /(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/;
        const urlcheck = videoRegExp.test(args[0]);
        let songData;
        let song;
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel,
            connection: null,
            songs: [],
            loop: false,
            volume: 100,
            playing: true
        };
        if (spotifyRegExp.test(args[0]))
            return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.play.nospotify'));
        try {
            if (urlcheck) {
                try {
                    songData = args[0];
                }
                catch (error) {
                    return client.embeds.error(message.channel + '```js\n' + error + '```');
                }
            }
            else {
                return ytSearch(message, args, client);
            }
            if (playlistRegExp.test(args[0]))
                return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.play.playlistuse'));
        }
        catch (error) {
            return client.embeds.error(message.channel + '```js\n' + error + '```');
        }
        songData = await ytdl_core_1.default.getInfo(songData).catch(async (error) => {
            return client.embeds.error(message.channel + '```js\n' + error + '```');
        });
        song = {
            title: songData.videoDetails.title,
            url: songData.videoDetails.video_url,
            thumbnail: songData.player_response.videoDetails.thumbnail.thumbnails[0].url,
            duration: new Date(songData.player_response.videoDetails.lengthSeconds * 1000).toISOString().substr(11, 8),
            durationSecs: songData.player_response.videoDetails.lengthSeconds * 1000,
            channel: songData.videoDetails.author.name,
            requester: message.author
        };
        if (serverQueue) {
            serverQueue.songs.push(song);
            let contents = [
                [
                    await client.strings(message.guild, 'cmd.play.requester'),
                    song.requester,
                    true
                ],
                [
                    await client.strings(message.guild, 'cmd.play.duration'),
                    song.duration,
                    true
                ],
                [
                    await client.strings(message.guild, 'cmd.play.channel'),
                    song.channel,
                    true
                ]
            ];
            return client.embeds.uni(message.channel, `[${song.title}](${song.url})`, 'Queue', contents, song.thumbnail, GuildIcon, client.config.colors.default, null);
        }
        client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        const play = async (song) => {
            const queue = client.queue.get(message.guild.id);
            if (!song && !queue.loop) {
                if (client.oldsongs.find(msg => msg.guildid === message.guild.id)) {
                    client.oldsongs.find(msg => msg.guildid === message.guild.id).message.delete();
                    const index = client.oldsongs.indexOf(client.oldsongs.find(msg => msg.guildid === message.guild.id));
                    if (index > -1)
                        client.oldsongs.splice(index, 1);
                }
                queue.voiceChannel.leave();
                client.queue.delete(message.guild.id);
            }
            const dispatcher = queue.connection.play(await ytdl_core_1.default(song.url), {
                quality: 'highestaudio',
                filter: 'audioonly',
                highWaterMark: 1024
            })
                .on('finish', async (reason) => {
                if (queue.loop) {
                    if (reason === 'Stream is not generating quickly enough')
                        return client.embeds.error(message.channel, 'Stream is not generating quickly enough');
                    queueConstruct.songs.shift();
                    queueConstruct.songs.push(song);
                    play(queueConstruct.songs[0]);
                }
                else {
                    if (reason === 'Stream is not generating quickly enough')
                        return client.embeds.error(message.channel, 'Stream is not generating quickly enough');
                    queueConstruct.songs.shift();
                    play(queueConstruct.songs[0]);
                }
            })
                .on('error', error => {
                return client.embeds.error(message.channel + '```js\n' + error + '```');
            });
            dispatcher.setVolume(queue.volume / 200);
            let contents = [
                [
                    await client.strings(message.guild, 'cmd.play.requester'),
                    song.requester,
                    true
                ],
                [
                    await client.strings(message.guild, 'cmd.play.duration'),
                    song.duration,
                    true
                ],
                [
                    await client.strings(message.guild, 'cmd.play.channel'),
                    song.channel,
                    true
                ]
            ];
            if (client.oldsongs.find(msg => msg.guildid === message.guild.id)) {
                client.oldsongs.find(msg => msg.guildid === message.guild.id).message.delete();
                const index = client.oldsongs.indexOf(client.oldsongs.find(msg => msg.guildid === message.guild.id));
                if (index > -1)
                    client.oldsongs.splice(index, 1);
            }
            const msg = await client.embeds.uni(queueConstruct.textChannel, `[${song.title}](${song.url})`, 'Start', contents, song.thumbnail, GuildIcon, client.config.colors.default, null);
            client.oldsongs.push({
                message: msg,
                guildid: message.guild.id
            });
        };
        try {
            const connection = await voiceChannel.join();
            message.guild.me.voice.setSelfDeaf(true);
            queueConstruct.connection = connection;
            play(queueConstruct.songs[0]);
        }
        catch (error) {
            client.queue.delete(message.guild.id);
            await voiceChannel.leave();
            return client.embeds.error(message.channel + '```js\n' + error + '```');
        }
        function ytSearch(message, args, client) {
            return new Promise(function (resolve, reject) {
                if (args.join(' ') !== '') {
                    search.default(args.join(' '), async function (error, result) {
                        if (error)
                            return client.embeds.error(message.channel + '```js\n' + error + '```');
                        const videos = result.videos.slice(0, 10);
                        if (videos.length === 0)
                            return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.play.noresults'));
                        let response = '';
                        for (const i in videos) {
                            response += `${parseInt(i) + 1}: [${videos[i].title}](${videos[i].url})\n`;
                        }
                        client.embeds.uni(message.channel, response, (await client.strings(message.guild, 'cmd.play.enter')).replace('$videos', videos.length), null, null, null, client.config.colors.default, null);
                        try {
                            const videocollection = await message.channel.awaitMessages(music => !isNaN(music.content) && music.content > 0 && music.content < 11 && music.author.id === message.author.id, {
                                max: 1,
                                time: 10000,
                                errors: ['time']
                            });
                            const videoIndex = parseInt(videocollection.first().content);
                            resolve(videos[videoIndex - 1].url);
                        }
                        catch (e) {
                            return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.play.canceled'));
                        }
                    });
                }
            });
        }
    }
};
