"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "dj.perms_missing": "🚫 $user, you need the `Manage Messages` permission or the $role role to use this command.",
    "message.dev": "🚫 You are not permitted to use this command.",
    "message.dm": "🚫 You cannot use this command inside Direct Messages.",
    "message.cooldown": "🚫 You have to wait $seconds seconds before you're able to reuse the $cmd command.",
    "message.dm.error": "🚫 There was an error while trying to execute this command.",
    "message.bot_permissions_missing": "🚫 I'm missing permissions to perform this action.\nI need the `$permission` permission to do so.",
    "message.user_permissions_missing": "🚫 $user, you need the `$permission` permission so you're able to use this command.",
    "message.server.error": "🚫 There was an error while trying to execute this command.",
    "cmd.language.name": "language",
    "cmd.language.description": "set the language from this bot\nvalid language ids: `en_us, de_de`",
    "cmd.language.usage": "`language` (<languageID>) - set language",
    "cmd.language.current.en": "<:flagus:800512866775728188> The current language is `$lang`.",
    "cmd.language.set.en": "<:flagus:800512866775728188> Language has been set to `$lang`.",
    "cmd.prefix.name": "prefix",
    "cmd.prefix.description": "change the bots prefix",
    "cmd.prefix.usage": "`prefix` (<prefix>) - change prefix\n`prefix` (<reset>) - reset to default value",
    "cmd.prefix.currentprefix": "The current prefix is `$prefix`",
    "cmd.prefix.length": "🚫 You cannot set a prefix with more than 5 chars.",
    "cmd.prefix.default": "The prefix has been reset to it's default value.",
    "cmd.prefix.set": "This server's prefix is now `$prefix`.",
    "cmd.eval.name": "eval",
    "cmd.eval.description": "Evaluate code snippets inside Discord Chat",
    "cmd.eval.usage": "`eval` (<code>)",
    "cmd.update.name": "update",
    "cmd.update.description": "update the discord bot client",
    "cmd.update.usage": "`update` - pull changes from github",
    "cmd.help.name": "help",
    "cmd.help.description": "displays list of commands or get help for a specific command",
    "cmd.help.usage": "`help` - displays command list\n`help` (<command>) - displays help for a specific command",
    "cmd.help.aliases_field": "Aliases",
    "cmd.help.group_field": "Group",
    "cmd.help.dm_field": "DM Compatible",
    "cmd.help.description_field": "Description",
    "cmd.help.usage_field": "Usage",
    "cmd.help.bot_permissions_field": "Permissions: Bot",
    "cmd.help.user_permissions_field": "Permissions: User",
    "cmd.help.configuration": "Configuration",
    "cmd.help.developer": "Bot Owner",
    "cmd.help.economy": "Economy",
    "cmd.help.fun": "Fun",
    "cmd.help.general": "General",
    "cmd.help.image": "Image",
    "cmd.help.moderation": "Moderation",
    "cmd.help.music": "Music",
    "cmd.help.roleplay": "Roleplay",
    "cmd.help.utility": "Utility",
    "cmd.help.title": "Command List",
    "cmd.help.footer": "<> required | [] optional",
    "cmd.info.name": "info",
    "cmd.info.description": "Some additional help.",
    "cmd.info.usage": "`info` - bot stats",
    "cmd.info.basics": "Basics",
    "cmd.info.basics.info": "$client, created by $devs\nCurrently active on $guilds guilds with $users total users\n\nUptime: $uptime\nLatency: $ping",
    "cmd.info.resources": "Resource usage",
    "cmd.info.resources.info": "CPU Usage: $usage\nRAM Usage: $usage2 used from $usage3",
    "cmd.info.support": "Support",
    "cmd.info.support.info": "$link",
    "cmd.info.invite": "Invite",
    "cmd.djrole.name": "djrole",
    "cmd.djrole.description": "set a role that users will need to execute music commands\nif this should be disabled, use a `delete` instead of the role",
    "cmd.djrole.usage": "`djrole` (<role>) - set a djrole",
    "cmd.djrole.rolerequired": "⚠️ Please specify a role.",
    "cmd.djrole.currentrole": "Currently $role is set as DJ role.",
    "cmd.djrole.roledeleted": "DJ role has been deleted.",
    "cmd.djrole.rolenotexist": "🚫 This role does not exist on this server.",
    "cmd.djrole.set": "$role has been set as DJ role.",
    "cmd.loop.name": "loop",
    "cmd.loop.description": "activate loop for the music queue",
    "cmd.loop.usage": "`loop` - loop the music queue",
    "cmd.loop.noqueue": "🚫 There is nothing playing.",
    "cmd.loop.nochannel": "🚫 You need to be in a voice channel to use the `loop` command.",
    "cmd.loop.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.loop.looped": "Loop is now $looped.",
    "cmd.loop.enabled": "enabled",
    "cmd.loop.disabled": "disabled",
    "cmd.np.name": "np",
    "cmd.np.description": "displays information about the current song",
    "cmd.np.usage": "`np` - get song info",
    "cmd.np.noqueue": "🚫 There is nothing playing.",
    "cmd.pause.name": "pause",
    "cmd.pause.description": "pause the current song",
    "cmd.pause.usage": "`pause` - pause the playback",
    "cmd.pause.noqueue": "🚫 There is nothing playing.",
    "cmd.pause.nochannel": "🚫 You need to be in a voice channel to use the `pause` command.",
    "cmd.pause.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.pause.paused": "⏸ Playback has been paused.",
    "cmd.pause.paused_no": "There is nothing playing that I could pause.",
    "cmd.play.name": "play",
    "cmd.play.description": "play music in a voice channel",
    "cmd.play.usage": "`play` (<link>) - play a youtube video\n`play` (<arguments>) - search for a youtube video",
    "cmd.play.nochannel": "🚫 You need to join a voice channel to play music.",
    "cmd.play.linkrequired": "⚠️ Please enter a valid youtube link.",
    "cmd.play.nospotify": "🚫 Spotify is currently not supported. <:spotify:800180960494354432>",
    "cmd.play.playlistuse": "⚠️ If you want to play a playlist, use the `playlist` command.",
    "cmd.play.requester": "Requested by",
    "cmd.play.duration": "Duration",
    "cmd.play.channel": "Youtube Channel",
    "cmd.play.added": "✅ Added to queue",
    "cmd.play.start": "🎶 Music started playing",
    "cmd.play.noresults": "🚫 I was not able to obtain any search results.",
    "cmd.play.enter": "Please enter a number between 1-$videos to select your song.",
    "cmd.play.canceled": "🚫 No or invalid number entered, song selection has been canceled.",
    "cmd.queue.name": "queue",
    "cmd.queue.description": "displays the music queue for your server",
    "cmd.queue.usage": "`queue` - display all queued songs",
    "cmd.queue.noqueue": "🚫 There is no music queue on this server.",
    "cmd.queue.queue": "Queue: $server",
    "cmd.remove.name": "remove",
    "cmd.remove.description": "remove a specific song from the music queue.",
    "cmd.remove.usage": "`remove` (<number>) - remove song",
    "cmd.remove.noqueue": "🚫 There is nothing playing.",
    "cmd.remove.nochannel": "🚫 You need to be in a voice channel to use the `remove` command.",
    "cmd.remove.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.remove.validsong": "⚠️ Please enter a valid number.",
    "cmd.remove.removed": "Removed $song from the music queue.",
    "cmd.resume.name": "resume",
    "cmd.resume.description": "resume the current song",
    "cmd.resume.usage": "`resume` - resume the playback",
    "cmd.resume.noqueue": "🚫 There is nothing playing.",
    "cmd.resume.nochannel": "🚫 You need to be in a voice channel to use the `resume` command.",
    "cmd.resume.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.resume.resumed": "▶ Playback has been resumed.",
    "cmd.resume.resumd_no": "🚫 There is nothing playing that I could resume.",
    "cmd.shuffle.name": "shuffle",
    "cmd.shuffle.description": "shuffle the music queue",
    "cmd.shuffle.usage": "`shuffle` - shuffle songs",
    "cmd.shuffle.noqueue": "🚫 There is nothing playing.",
    "cmd.shuffle.nochannel": "🚫 You need to be in a voice channel to use the `shuffle` command.",
    "cmd.shuffle.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.shuffle.shuffle": "🔀 The music queue has been shuffled.",
    "cmd.skip.name": "skip",
    "cmd.skip.description": "skip the song that is currently playing",
    "cmd.skip.usage": "`skip` - skip the current song",
    "cmd.skip.noqueue": "🚫 There is nothing playing.",
    "cmd.skip.nochannel": "🚫 You need to be in a voice channel to use the `skip` command.",
    "cmd.skip.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.skip.pause": "🚫 This command is not available because the playback is paused.",
    "cmd.skip.voted": "🚫 $user, you already voted.\nCurrent votes: $votes",
    "cmd.skip.skipped": "⏩ $song has been skipped.",
    "cmd.skip.votes": "Current votes: $votes",
    "cmd.skipto.name": "skipto",
    "cmd.skipto.description": "skip to a specific song in the music queue by entering the song number",
    "cmd.skipto.usage": "`skipto` (<number>) - skip to a song",
    "cmd.skipto.noqueue": "🚫 There is nothing playing.",
    "cmd.skipto.nochannel": "🚫 You need to be in a voice channel to use the `skipto` command.",
    "cmd.skipto.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.skipto.nosongs": "🚫 You cannot skip songs that doesn't exist.",
    "cmd.skipto.number": "⚠️ Please enter a valid number.",
    "cmd.skipto.skipped": "⏩ $songs songs have been skipped.",
    "cmd.stop.name": "stop",
    "cmd.stop.description": "stop the current song",
    "cmd.stop.usage": "`stop` - stop the playback",
    "cmd.stop.noqueue": "🚫 There is nothing playing.",
    "cmd.stop.nochannel": "🚫 You need to be in a voice channel to use the `stop` command.",
    "cmd.stop.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.stop.stopped": "⏹️ Playback has been stopped.",
    "cmd.volume.name": "volume",
    "cmd.volume.description": "configure the volume of the queue",
    "cmd.volume.usage": "`volume` (<number>) - change volume",
    "cmd.volume.noqueue": "🚫 There is nothing playing.",
    "cmd.volume.nochannel": "🚫 You need to be in a voice channel to use the `volume` command.",
    "cmd.volume.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.volume.current": "The current volume is $volume",
    "cmd.volume.numberrequired": "⚠️ Please enter a valid number.",
    "cmd.volume.max": "🚫 You cannot set the volume above 200%.",
    "cmd.volume.set": "I've set the volume to $volume.",
    "cmd.poll.name": "poll",
    "cmd.poll.description": "create a poll with different options",
    "cmd.poll.usage": "`poll` (<question|[option1],[option2]) - create a poll",
    "cmd.poll.questionrequired": "⚠️ Please enter a question.",
    "cmd.poll.options": "🚫 You cannot add more than 10 options.",
    "cmd.poll.error": "\n\n🚫 This may be because you forgot to enter options.",
    "cmd.serverinfo.name": "serverinfo",
    "cmd.serverinfo.description": "displays Information about this server",
    "cmd.serverinfo.usage": "`serverinfo` - get server info",
    "cmd.serverinfo.noservericon": "No Server Icon URL",
    "cmd.serverinfo.nosplashicon": "No Splash Icon URL",
    "cmd.serverinfo.verification": "Verification Level",
    "cmd.serverinfo.id": "ID",
    "cmd.serverinfo.owner": "Owner",
    "cmd.serverinfo.members": "Members",
    "cmd.serverinfo.humans": "Humans",
    "cmd.serverinfo.bots": "Bots",
    "cmd.serverinfo.text": "Text Channels",
    "cmd.serverinfo.voice": "Voice Channels",
    "cmd.serverinfo.region": "Region",
    "cmd.serverinfo.boostlevel": "Boost Level",
    "cmd.serverinfo.boosts": "Boosts",
    "cmd.serverinfo.created": "Creation date",
    "cmd.serverinfo.roles": "Roles",
    "cmd.serverinfo.emojis": "Emojis",
    "cmd.serverinfo.features": "Features",
    "cmd.serverinfo.iconURL": "Icon URL",
    "cmd.serverinfo.splashURL": "Splash URL",
    "cmd.userinfo.name": "userinfo",
    "cmd.userinfo.description": "displays Information about you or a specific member.",
    "cmd.userinfo.usage": "`userinfo` (<member>) - get user info",
    "cmd.userinfo.nameAndDis": "Name + Discriminator",
    "cmd.userinfo.nickname": "Nickname",
    "cmd.userinfo.id": "ID",
    "cmd.userinfo.status": "Status",
    "cmd.userinfo.activity": "Activity",
    "cmd.userinfo.client": "Client",
    "cmd.userinfo.selfMute": "Mute",
    "cmd.userinfo.selfMute.options": "$self Self\n$server Server",
    "cmd.userinfo.selfDeaf": "Deaf",
    "cmd.userinfo.selfDeaf.options": "$self Self\n$server Server",
    "cmd.userinfo.roles": "Roles",
    "cmd.userinfo.permissions": "Permissions",
    "cmd.userinfo.badges": "Badges",
    "cmd.userinfo.createdAt": "Account creation date",
    "cmd.userinfo.joinedAt": "Server joining date",
    "cmd.userinfo.avatar": "Avatar",
    "cmd.waifu.name": "Waifu",
    "cmd.waifu.description": "displays your selected waifu",
    "cmd.waifu.usage": "`waifu` - display your waifu",
    "cmd.waifu.nope": "🚫 Sorry but you do not own a Waifu.",
    "cmd.waifu.name_field": "Name",
    "cmd.waifu.health_field": "Health",
    "cmd.waifu.strength_field": "Strength",
    "cmd.waifu.second": "Second Waifu",
    "cmd.waifu.field_description": "Description",
    "cmd.waifu.type_field": "Type",
    "cmd.waifu.footer": "Waifu System <3",
    "cmd.switch.name": "Switch",
    "cmd.switch.description": "Switch to a other Waifu",
    "cmd.switch.noid": "🚫 I can't finde a Wiafu with this ID.",
    "cmd.switch.switched": "Successful switched to:",
    "cmd.switch.usage": "`switch` switch to a other Waifu.",
    "cmd.waifupack.name": "Waifupack",
    "cmd.waifupack.description": "Buy a Waifu pack.",
    "cmd.waifupack.usage": "`waifupack` buy a Waifu pack",
    "cmd.waifupack.already": "🚫 You already have 5 Waifus.",
    "cmd.waifupack.nomoney": "🚫 You don't have enough money!",
    "cmd.coins.name": "Coins",
    "cmd.coins.description": "Shows your coins.",
    "cmd.coins.usage": "`coins` Shows your coins.",
    "cmd.coins.has": " currently has $coins Yen 💴",
    "cmd.daily.reward": " You have claimed your daily $coins Yen 💴",
    "cmd.daily.wait": "🚫 You can't claim your daily reward!",
    "cmd.weekly.reward": " You have claimed your weekly $coins Yen 💴",
    "cmd.weekly.wait": "🚫 You can't claim your weekly reward!"
};
