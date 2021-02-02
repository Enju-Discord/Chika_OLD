import ytdl from "ytdl-core";
import * as youtube from "simple-youtube-api";
import {
    Util
} from "discord.js";

module.exports = {
    name: "cmd.playlist.name",
    description: "cmd.playlist.description",
    usage: "cmd.playlist.usage",
    args: true,
    dm: false,
    group: "Music",
    cooldown: 10,
    bot_permissions: ["CONNECT", "SPEAK", "USE_VAD"],
    user_permissions: [],
    aliases: ["pl"],
    async execute(message: any, args: any, client: any, prefix: any) {
        const Youtube: any = new youtube.default(client.config.secrets.YTAPIKey);
        const voiceChannel: any = message.member.voice.channel;
        const serverQueue: any = client.queue.get(message.guild.id);

        let GuildIcon: string = "";

        if (message.guild.iconURL()) {
            GuildIcon = message.guild.iconURL({
                dynamic: true,
                size: 1024,
                format: "png"
            });
        }

        if (!voiceChannel) return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.playlist.nochannel"));
        if (!args[0]) return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.playlist.linkrequired"));

        const videoRegExp: RegExp = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
        const playlistRegExp: RegExp = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/g;
        const spotifyRegExp: RegExp = /(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/;
        const urlcheck: boolean = playlistRegExp.test(args[0]);

        let song: any;
        let playlist: any = null;
        let videos: Array < any > = [];

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel,
            connection: null,
            songs: [],
            loop: false,
            volume: 100,
            playing: true
        }

        try {
            if (urlcheck) {
                try {
                    playlist = await Youtube.getPlaylist(args[0]);
                    videos = await playlist.getVideos(350);
                } catch (error) {
                    if (error.errors[0].message === `The request cannot be completed because you have exceeded your <a href="/youtube/v3/getting-started#quota">quota</a>.`) return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.playlist.api"));
                }
            } else if (spotifyRegExp.test(args[0])) return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.playlist.nospotify"));
            else return client.embeds.notice(message.channel, await client.strings(message.guild, "cmd.playlist.play"));
        } catch (error) {
            return client.embeds.error(message.channel, "```js\n" + error + "```");
        }

        for (const vid in videos) {
            await videos[vid].fetch().catch(async error => {
                return client.embeds.error(message.channel, "```js\n" + error + "```");
            });

            song = {
                id: videos[vid].id,
                title: Util.escapeMarkdown(videos[vid].title),
                url: videos[vid].url,
                thumbnail: videos[vid].thumbnails.default.url,
                duration: new Date(videos[vid].durationSeconds * 1000).toISOString().substr(11, 8),
                durationSecs: videos[vid].durationSeconds * 1000,
                channel: videos[vid].channel.title,
                requester: message.author
            }


            if (serverQueue) {
                serverQueue.songs.push(song);
            } else queueConstruct.songs.push(song);
        }

        client.embeds.success(message.channel, (await client.strings(message.guild, "cmd.playlist.added")).replace("$list", playlist.title));

        client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        const play = async song => {
            const queue: any = client.queue.get(message.guild.id);

            if (!song && !queue.loop) {
                if (client.oldsongs.find(msg => msg.guildid === message.guild.id)) {
                    client.oldsongs.find(msg => msg.guildid === message.guild.id).message.delete();
                    const index: any = client.oldsongs.indexOf(client.oldsongs.find(msg => msg.guildid === message.guild.id));
                    if (index > -1) client.oldsongs.splice(index, 1);
                }

                queue.voiceChannel.leave();
                client.queue.delete(message.guild.id);
            }

            if (!song) return undefined;
            const dispatcher: any = queue.connection.play(await ytdl(song.url), {
                    quality: "highestaudio",
                    filter: "audioonly",
                    highWaterMark: 1024
                })
                .on("finish", async reason => {
                    if (queue.loop) {
                        if (reason === "Stream is not generating quickly enough") return client.embeds.error(message.channel, "Stream is not generating quickly enough");
                        queueConstruct.songs.shift();
                        queueConstruct.songs.push(song);
                        play(queueConstruct.songs[0]);
                    } else {
                        if (reason === "Stream is not generating quickly enough") return client.embeds.error(message.channel, "Stream is not generating quickly enough");
                        queueConstruct.songs.shift();
                        play(queueConstruct.songs[0]);
                    }
                })
                .on("error", error => {
                    if (error == "Error: ffmpeg stream: write EPIPE") {
                        queueConstruct.songs.shift();
                        queueConstruct.songs.push(song);
                        play(queueConstruct.songs[0]);
                        return undefined;
                    }
                    return client.embeds.error(message.channel, "```js\n" + error + "```");
                });

            dispatcher.setVolume(queue.volume / 200);

            let contents: Array < any > = [
                [
                    await client.strings(message.guild, "cmd.playlist.requester"),
                    song.requester,
                    true
                ],
                [
                    await client.strings(message.guild, "cmd.playlist.duration"),
                    song.duration,
                    true
                ],
                [
                    await client.strings(message.guild, "cmd.playlist.channel"),
                    song.channel,
                    true
                ]
            ];

            if (client.oldsongs.find(msg => msg.guildid === message.guild.id)) {
                client.oldsongs.find(msg => msg.guildid === message.guild.id).message.delete();
                const index = client.oldsongs.indexOf(client.oldsongs.find(msg => msg.guildid === message.guild.id));
                if (index > -1) client.oldsongs.splice(index, 1);
            }

            const msg: any = await client.embeds.uni(queueConstruct.textChannel, `[${song.title}](${song.url})`, await client.strings(message.guild, "cmd.playlist.start"), contents, song.thumbnail, GuildIcon, client.config.colors.default, null);

            client.oldsongs.push({
                message: msg,
                guildid: message.guild.id
            });
        }

        if (!serverQueue) {
            client.queue.set(message.guild.id, queueConstruct);
            try {
                const connection: any = await voiceChannel.join();
                message.guild.me.voice.setSelfDeaf(true)
                queueConstruct.connection = connection;
                play(queueConstruct.songs[0]);
            } catch (error) {
                client.queue.delete(message.guild.id);
                await voiceChannel.leave();
                return client.embeds.error(message.channel, "```js\n" + error + "```");
            }
        }
    }
}