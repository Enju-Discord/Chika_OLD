"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "dj.perms_missing": "🚫 $user, you need the `Manage Messages` permission or the $role role to use this command.",
    "message.dev": "🔧 You are not permitted to use this command.",
    "message.dm": "🚫 You cannot use this command inside Direct Messages.",
    "message.cooldown": "🚫 You have to wait $seconds seconds before you're able to reuse the $cmd command.",
    "message.dm.error": "🚫 There was an error while trying to execute this command.",
    "message.bot_permissions_missing": "🚫 I'm missing permissions to perform this action.\nI need the `$permission` permission to do so.",
    "message.user_permissions_missing": "🚫 $user, you need the `$permission` permission so you're able to use this command.",
    "message.server.error": "🚫 There was an error while trying to execute this command.",
    "cmd.autorole.name": "autorole",
    "cmd.autorole.description": "set a role for new joined users",
    "cmd.autorole.usage": "`autorole` (<role>) - set autorole\n`autorole` (<delete>) - delete autorole that has been set",
    "cmd.autorole.rolerequired": "⚠️ Please specify a role.",
    "cmd.autorole.current": "The current autorole is $autorole.",
    "cmd.autorole.delete": "Autorole has been deleted.",
    "cmd.autorole.rolenotfound": "🚫 This role does not exist on this server.",
    "cmd.autorole.set": "$autorole has been set as autorole.",
    "cmd.goodbye.name": "welcome",
    "cmd.goodbye.description": "send a message when users leave",
    "cmd.goodbye.usage": "`goodbye` (<channel>) (<message>) - send a leave message\n`goodbye` (<delete>) - disable the leave message\n`goodbye` (<reset>) - reset the leave message to default value\n`$user` - mention the user left\n`$guild` - mention the server name",
    "cmd.goodbye.currentchan": "Channel",
    "cmd.goodbye.currentmsg": "Message",
    "cmd.goodbye.channelrequired": "⚠️ Please specify a channel.",
    "cmd.goodbye.deleted": "Goodbye message has been disabled.",
    "cmd.goodbye.channelnotfound": "🚫 This channel does not exist on this server.",
    "cmd.goodbye.length": "🚫 You cannot set a goodbye message with more than 800 chars.",
    "cmd.goodbye.default": "Goodbye message has been reset to it's default value.",
    "cmd.goodbye.set": "Goodbye message has been set in $channel.",
    "cmd.language.name": "language",
    "cmd.language.description": "set the language from this bot\nvalid language ids: `en_us, de_de`",
    "cmd.language.usage": "`language` (<languageID>) - set language",
    "cmd.language.current.en": "<:flagus:800512866775728188> The current language is `$lang`.",
    "cmd.language.set.en": "<:flagus:800512866775728188> Language has been set to `$lang`.",
    "cmd.prefix.name": "prefix",
    "cmd.prefix.description": "change the bots prefix",
    "cmd.prefix.usage": "`prefix` (<prefix>) - change prefix\n`prefix` (<reset>) - reset to default value",
    "cmd.prefix.error": "🚫 Uhm... no.",
    "cmd.prefix.currentprefix": "The current prefix is `$prefix`",
    "cmd.prefix.length": "🚫 You cannot set a prefix with more than 5 chars.",
    "cmd.prefix.default": "The prefix has been reset to it's default value.",
    "cmd.prefix.set": "This server's prefix is now `$prefix`.",
    "cmd.welcome.name": "welcome",
    "cmd.welcome.description": "send a message when users join",
    "cmd.welcome.usage": "`welcome` (<channel>) (<message>) - send a join message\n`welcome` (<delete>) - disable the join message\n`welcome` (<reset>) - reset the join message to default value\n`$user` - mention the user joined\n`$guild` - mention the server name",
    "cmd.welcome.currentchan": "Channel",
    "cmd.welcome.currentmsg": "Message",
    "cmd.welcome.channelrequired": "⚠️ Please specify a channel.",
    "cmd.welcome.deleted": "Welcome message has been disabled.",
    "cmd.welcome.channelnotfound": "🚫 This channel does not exist on this server.",
    "cmd.welcome.length": "🚫 You cannot set a welcome message with more than 800 chars.",
    "cmd.welcome.default": "Welcome message has been reset to it's default value.",
    "cmd.welcome.set": "Welcome message has been set in $channel.",
    "cmd.eval.name": "eval",
    "cmd.eval.description": "Evaluate code snippets inside Discord Chat",
    "cmd.eval.usage": "`eval` (<code>)",
    "cmd.message.name": "message",
    "cmd.message.description": "send a direct message to a specific user",
    "cmd.message.usage": "`message` (<ID>) (<message>) - dm a user",
    "cmd.server.name": "server",
    "cmd.server.description": "create an invite for the specified server",
    "cmd.server.usage": "`server` (<server>) - create invites",
    "cmd.update.name": "update",
    "cmd.update.description": "update the discord bot client",
    "cmd.update.usage": "`update` - pull changes from github",
    "cmd.daily.name": "daily",
    "cmd.daily.description": "claim your daily reward",
    "cmd.daily.usage": "`daily` - claim yen",
    "cmd.daily.get": "$user, you claimed your daily `$yen` Yen. 💴",
    "cmd.daily.claimed": "🚫 $user, you have already claimed your daily reward.\nNext reward in: $timeleft",
    "cmd.monthly.name": "monthly",
    "cmd.monthly.description": "claim your monthly reward",
    "cmd.monthly.usage": "`weekly` - claim yen",
    "cmd.monthly.get": "$user, you claimed your monthly `$yen` Yen. 💴",
    "cmd.monthly.claimed": "🚫 $user, you have already claimed your monthly reward.\nNext reward in: $timeleft",
    "cmd.weekly.name": "weekly",
    "cmd.weekly.description": "claim your weekly reward",
    "cmd.weekly.usage": "`weekly` - claim yen",
    "cmd.weekly.get": "$user, you claimed your weekly `$yen` Yen. 💴",
    "cmd.weekly.claimed": "🚫 $user, you have already claimed your weekly reward.\nNext reward in: $timeleft",
    "cmd.yen.name": "yen",
    "cmd.yen.description": "check your balance",
    "cmd.yen.usage": "`yen` ([member]) - check yen",
    "cmd.yen.result": "$user currently has `$yen` Yen. 💴",
    "cmd.anime.name": "anime",
    "cmd.anime.description": "displays information about a specific anime",
    "cmd.anime.usage": "`anime` - search for an anime",
    "cmd.anime.noresult": "🚫 No results found.",
    "cmd.anime.animerequired": "⚠️ Please enter the name of an anime.",
    "cmd.anime.information": "❯\u2000Information",
    "cmd.anime.information.info": "•\u2000Japanese Name: $jap_name\n•\u2000Age Rating: $age\n•\u2000NSFW: $nsfw",
    "cmd.anime.information.nsfw.yes": "Yes",
    "cmd.anime.information.nsfw.no": "No",
    "cmd.anime.stats": "❯\u2000Stats",
    "cmd.anime.stats.info": "•\u2000Average Rating: $av_rate\n•\u2000Rating Rank: $ranked_rate\n•\u2000Popularity Rank: $pp_rate",
    "cmd.anime.status": "❯\u2000Status",
    "cmd.anime.status.info": "•\u2000Episodes: $episodes\n•\u2000Start Date: $start_date\n•\u2000End Date: $end_date",
    "cmd.anime.status.info.airing": "Still airing",
    "cmd.say.name": "say",
    "cmd.say.description": "let the bot say something",
    "cmd.say.usage": "`say` (<arguments>) - talk as the bot",
    "cmd.say.messagerequired": "⚠️ What do you want me to say?",
    "cmd.ship.name": "ship",
    "cmd.ship.description": "displays information about a specified azur lane ship",
    "cmd.ship.usage": "`ship` - azur lane ship infos",
    "cmd.ship.ship.name": "Name",
    "cmd.ship.class": " Class",
    "cmd.ship.nationality": "Nationality",
    "cmd.ship.hullType": "HullType",
    "cmd.ship.rarity": "Rarity",
    "cmd.ship.stars": "Stars",
    "cmd.ship.baseStats": "Base Stats",
    "cmd.ship.baseStats.stats": "Health: `$health`\nArmor: `$armor`\nReload: `$reload`\nLuck: `$luck`\nFirepower: `$firepower`\nTorpedo: `$torpedo`\nEvasion: `$evasion`\nSpeed: `$speed`\nAntiair: `$antiair`\nAviation `$aviation`\nOil Consumption: `$oilConsumption`\nAccuracy: `$accuracy`\nAntisubmarineWarfare: `$antisubmarineWarfare`",
    "cmd.ship.weapons": "Weapons",
    "cmd.ship.weapons.w": "1. `$weapon1`\n2. `$weapon2`\n3. `$weapon3`",
    "cmd.ship.skills": "Skills",
    "cmd.ship.skills.s.1": "1. `$skill1`",
    "cmd.ship.skills.s.2": "1. `$skill1`\n2. `$skill2`",
    "cmd.ship.skills.s.3": "1. `$skill1`\n2. `$skill2`\n3. `$skill3`",
    "cmd.ship.construction": "Construction Time",
    "cmd.ship.misc": "Misc Information",
    "cmd.ship.misc.infos": "Artist: $artist\nVoice: $voice",
    "cmd.ship.wiki": "Wiki URL",
    "cmd.ship.namerequired": "⚠️ Please specify a ship.",
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
    "cmd.anal.name": "anal",
    "cmd.anal.description": "displays an anal image",
    "cmd.anal.usage": "`anal` - displays image",
    "cmd.anal.nsfw": "🚫 You can only use this command in an nsfw marked channel.",
    "cmd.boobs.name": "boobs",
    "cmd.boobs.description": "displays a boobs image",
    "cmd.boobs.usage": "`boobs` - displays image",
    "cmd.boobs.nsfw": "🚫 You can only use this command in an nsfw marked channel.",
    "cmd.cat.name": "cat",
    "cmd.cat.description": "displays a cat image",
    "cmd.cat.usage": "`cat` - displays image",
    "cmd.dog.name": "dog",
    "cmd.dog.description": "displays a dog image",
    "cmd.dog.usage": "`dog` - displays image",
    "cmd.feet.name": "feet",
    "cmd.feet.description": "displays a feet image",
    "cmd.feet.usage": "`feet` - displays image",
    "cmd.feet.nsfw": "🚫 You can only use this command in an nsfw marked channel.",
    "cmd.fox.name": "fox",
    "cmd.fox.description": "displays a fox image",
    "cmd.fox.usage": "`fox` - displays image",
    "cmd.hentai.name": "hentai",
    "cmd.hentai.description": "displays a hentai image",
    "cmd.hentai.usage": "`hentai` - displays image",
    "cmd.hentai.nsfw": "🚫 You can only use this command in an nsfw marked channel.",
    "cmd.neko.name": "neko",
    "cmd.neko.description": "displays a neko image",
    "cmd.neko.usage": "`neko` - displays image",
    "cmd.pussy.name": "pussy",
    "cmd.pussy.description": "displays a pussy image",
    "cmd.pussy.usage": "`pussy` - displays image",
    "cmd.pussy.nsfw": "🚫 You can only use this command in an nsfw marked channel.",
    "cmd.ban.name": "ban",
    "cmd.ban.description": "ban a member",
    "cmd.ban.usage": "`ban` (<member>) ([reason]) - ban someone",
    "cmd.ban.userrequired": "⚠️ Please mention the member you want to ban.",
    "cmd.ban.usernotfound": "🚫 This member doesn't exist on this server.",
    "cmd.ban.userisbot": "🚫 Do you really think I would ban myself?",
    "cmd.ban.userisowner": "🚫 Do you really think I could ban the owner of this server?",
    "cmd.ban.noban": "🚫 This member is not bannable.",
    "cmd.ban.selfban": "🚫 Why would you ban yourself?",
    "cmd.ban.user": "User",
    "cmd.ban.moderator": "Moderator",
    "cmd.ban.reason": "Reason",
    "cmd.ban.banned": "Banned",
    "cmd.clear.name": "clear",
    "cmd.clear.description": "clear messages in your current channel",
    "cmd.clear.usage": "`clear` (<number>) - clear messages",
    "cmd.clear.numberrequired": "⚠️ Please enter a number.",
    "cmd.clear.NaN": "⚠️ Please enter a valid number.",
    "cmd.clear.length": "⚠️ You cannot delete more than 100 messages at once.",
    "cmd.clear.old": "🚫 The messages you're trying to delete are older than 14 days.",
    "cmd.clear.deleted": "I deleted $messages messages from this channel. :wastebasket:",
    "cmd.kick.name": "kick",
    "cmd.kick.description": "kick a member",
    "cmd.kick.usage": "`kick` (<member>) ([reason]) - kick someone",
    "cmd.kick.userrequired": "⚠️ Please mention the member you want to kick.",
    "cmd.kick.usernotfound": "🚫 This member doesn't exist on this server.",
    "cmd.kick.userisbot": "🚫 Do you really think I would kick myself?",
    "cmd.kick.userisowner": "🚫 Do you really think I could kick the owner of this server?",
    "cmd.kick.nokick": "🚫 This member is not kickable.",
    "cmd.kick.selfkick": "🚫 Why would you kick yourself?",
    "cmd.kick.user": "User",
    "cmd.kick.moderator": "Moderator",
    "cmd.kick.reason": "Reason",
    "cmd.kick.banned": "Kicked",
    "cmd.mute.name": "mute",
    "cmd.mute.description": "mute a member on the whole server",
    "cmd.mute.usage": "`mute` (<member>) - mute someone",
    "cmd.mute.userrequired": "⚠️ Please mention the member you want to mute.",
    "cmd.mute.usernotfound": "🚫 This member doesn't exist on this server.",
    "cmd.mute.userisadmin": "🚫 This member is an Admin and cannot be muted.",
    "cmd.mute.userisbot": "🚫 Do you really think I would mute myself?",
    "cmd.mute.selfmute": "🚫 Why should you mute yourself?",
    "cmd.mute.perms": "🚫 I was not able to mute $user due to missing permissions.",
    "cmd.mute.rolemissing": "⚠️ Please setup the muterole first using `muterole` command.",
    "cmd.mute.user": "User",
    "cmd.mute.moderator": "Moderator",
    "cmd.mute.reason": "Reason",
    "cmd.mute.already": "$user is already muted.",
    "cmd.mute.muted": "Muted",
    "cmd.muterole.name": "muterole",
    "cmd.muterole.description": "configure a role to mute users",
    "cmd.muterole.usage": "`muterole` - configure muterole",
    "cmd.muterole.rolerequired": "⚠️ Please specify a role.",
    "cmd.muterole.current": "Currently $muterole is set as muterole.",
    "cmd.muterole.deleted": "Muterole has been deleted.",
    "cmd.muterole.rolenotfound": "🚫 This role does not exist on this server.",
    "cmd.muterole.set": "$muterole has been set as muterole.",
    "cmd.unmute.name": "unmute",
    "cmd.unmute.description": "unmute a member on the whole server",
    "cmd.unmute.usage": "`unmute` (<member>) - unmute someone",
    "cmd.unmute.userrequired": "⚠️ Please mention the member you want to unmute.",
    "cmd.unmute.usernotfound": "🚫 This member doesn't exist on this server.",
    "cmd.unmute.perms": "🚫 I was not able to unmute $user due to missing permissions.",
    "cmd.unmute.rolemissing": "⚠️ Please setup the muterole first using `muterole` command.",
    "cmd.unmute.user": "User",
    "cmd.unmute.moderator": "Moderator",
    "cmd.unmute.reason": "Reason",
    "cmd.unmute.notmuted": "🚫 $user is not muted.",
    "cmd.unmute.unmuted": "Unmuted",
    "cmd.djrole.name": "djrole",
    "cmd.djrole.description": "configure a role that users will need to execute music commands\nif this should be disabled, use a `delete` instead of the role",
    "cmd.djrole.usage": "`djrole` (<role>) - set a djrole",
    "cmd.djrole.rolerequired": "⚠️ Please specify a role.",
    "cmd.djrole.currentrole": "Currently $role is set as DJ role.",
    "cmd.djrole.roledeleted": "DJ role has been deleted.",
    "cmd.djrole.rolenotfound": "🚫 This role does not exist on this server.",
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
    "cmd.play.start": "🎶 Now playing",
    "cmd.play.noresults": "🚫 I was not able to obtain any search results.",
    "cmd.play.enter": "Please enter a number between 1-$videos to select your song.",
    "cmd.play.canceled": "🚫 No or invalid number entered, song selection has been canceled.",
    "cmd.playlist.name": "playlist",
    "cmd.playlist.description": "queue a youtube playlist",
    "cmd.playlist.usage": "`playlist` (<link>) - add a playlist to the queue",
    "cmd.playlist.nochannel": "🚫 You need to join a voice channel to play music.",
    "cmd.playlist.linkrequired": "⚠️ Please enter a valid youtube link.",
    "cmd.playlist.api": "🚫 I currently exceeded my requests to youtube.\nTry again later.",
    "cmd.playlist.nospotify": "🚫 Spotify is currently not supported. <:spotify:800180960494354432>",
    "cmd.playlist.play": "⚠️ If you want to play a video, use the `play` command.",
    "cmd.playlist.added": "✅ Added $list to the queue.",
    "cmd.playlist.requester": "Requested by",
    "cmd.playlist.duration": "Duration",
    "cmd.playlist.channel": "Youtube Channel",
    "cmd.playlist.start": "🎶 Now playing",
    "cmd.queue.name": "queue",
    "cmd.queue.description": "displays the music queue for your server",
    "cmd.queue.usage": "`queue` - display all queued songs",
    "cmd.queue.noqueue": "🚫 There is no music queue on this server.",
    "cmd.queue.queue": "Queue: $server",
    "cmd.remove.name": "remove",
    "cmd.remove.description": "remove a specific song from the music queue",
    "cmd.remove.usage": "`remove` (<number>) - remove song",
    "cmd.remove.noqueue": "🚫 There is nothing playing.",
    "cmd.remove.nochannel": "🚫 You need to be in a voice channel to use the `remove` command.",
    "cmd.remove.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.remove.validsong": "⚠️ Please enter a valid number.",
    "cmd.remove.removed": "Removed $song $requester",
    "cmd.resume.name": "resume",
    "cmd.resume.description": "resume the current song",
    "cmd.resume.usage": "`resume` - resume the playback",
    "cmd.resume.noqueue": "🚫 There is nothing playing.",
    "cmd.resume.nochannel": "🚫 You need to be in a voice channel to use the `resume` command.",
    "cmd.resume.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.resume.resumd_no": "🚫 There is nothing playing that I could resume.",
    "cmd.shuffle.name": "shuffle",
    "cmd.shuffle.description": "shuffle the music queue",
    "cmd.shuffle.usage": "`shuffle` - shuffle songs",
    "cmd.shuffle.noqueue": "🚫 There is nothing playing.",
    "cmd.shuffle.nochannel": "🚫 You need to be in a voice channel to use the `shuffle` command.",
    "cmd.shuffle.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.skip.name": "skip",
    "cmd.skip.description": "skip the song that is currently playing",
    "cmd.skip.usage": "`skip` - skip the current song",
    "cmd.skip.noqueue": "🚫 There is nothing playing.",
    "cmd.skip.nochannel": "🚫 You need to be in a voice channel to use the `skip` command.",
    "cmd.skip.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.skip.pause": "🚫 This command is not available because the playback is paused.",
    "cmd.skip.voted": "🚫 $user, you already voted.\nCurrent votes: `$votes`",
    "cmd.skip.votes": "Current votes: `$votes`",
    "cmd.skipto.name": "skipto",
    "cmd.skipto.description": "skip to a specific song in the music queue by entering the song number",
    "cmd.skipto.usage": "`skipto` (<number>) - skip to a song",
    "cmd.skipto.noqueue": "🚫 There is nothing playing.",
    "cmd.skipto.nochannel": "🚫 You need to be in a voice channel to use the `skipto` command.",
    "cmd.skipto.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.skipto.nosongs": "🚫 You cannot skip songs that doesn't exist.",
    "cmd.skipto.number": "⚠️ Please enter a valid number.",
    "cmd.stop.name": "stop",
    "cmd.stop.description": "stop the current song",
    "cmd.stop.usage": "`stop` - stop the playback",
    "cmd.stop.noqueue": "🚫 There is nothing playing.",
    "cmd.stop.nochannel": "🚫 You need to be in a voice channel to use the `stop` command.",
    "cmd.stop.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.volume.name": "volume",
    "cmd.volume.description": "configure the volume of the queue",
    "cmd.volume.usage": "`volume` (<number>) - change volume",
    "cmd.volume.noqueue": "🚫 There is nothing playing.",
    "cmd.volume.nochannel": "🚫 You need to be in a voice channel to use the `volume` command.",
    "cmd.volume.nochannel_bot": "🚫 I'm not in your voice channel.",
    "cmd.volume.current": "The current volume is $volume",
    "cmd.volume.numberrequired": "⚠️ Please enter a valid number.",
    "cmd.volume.max": "🚫 You cannot set the volume above 200%.",
    "cmd.volume.set": "$volume 🔈",
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
    "cmd.userinfo.usage": "`userinfo` ([member]) - get user info",
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
    "cmd.waifu.nope": "🚫 You do not own a Waifu.",
    "cmd.waifu.name_field": "Name",
    "cmd.waifu.health_field": "Health",
    "cmd.waifu.strength_field": "Strength",
    "cmd.waifu.second": "Second Waifu",
    "cmd.waifu.field_description": "Description",
    "cmd.waifu.type_field": "Type",
    "cmd.waifu.footer": "Waifu System <3",
    "cmd.switch.name": "switch",
    "cmd.switch.description": "switch to another waifu you own",
    "cmd.switch.usage": "`switch` - switch waifu",
    "cmd.switch.noid": "🚫 I cannot find a Wiafu with this ID.",
    "cmd.switch.switched": "Successfully switched to: ",
    "cmd.waifupack.name": "waifupack",
    "cmd.waifupack.description": "buy a pack full of waifus",
    "cmd.waifupack.usage": "`waifupack` - buy a waifu pack",
    "cmd.waifupack.already": "🚫 You already own 5 Waifus.",
    "cmd.waifupack.nomoney": "🚫 You do not have enough money to buy a pack.",
};
