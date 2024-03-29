"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = exports.features = exports.verification = exports.permissions = exports.badges = exports.status = exports.emotes = exports.secrets = void 0;
exports.secrets = {
    "token": "",
    "devToken": "",
    "runOnDev": false,
    "prefix": "c+",
    "mysqlhost": "",
    "mysqluser": "",
    "mysqldb": "",
    "mysqlpw": "",
    "YTAPIKey": "",
    "topggToken": "",
    "azuToken": "",
    "guildLogsID": "",
    "guildLogsToken": "",
    "DMLogsID": "",
    "DMLogsToken": "",
    "CMDLogsID": "",
    "CMDLogsToken": "",
    "voteLogsID": "",
    "voteLogsToken": "",
    "VoidbotsToken": "",
    "DiscordBotlist": "",
    "DBL": "",
    "DBLAuth": "",
    "developers": ["", "", ""]
};
exports.emotes = {
    "yes": "<:greenTick:718980916449378365>",
    "no": "<:redTick:718980916076347423>",
    "switch": "<:switch:762122022029361192> Switch",
    "battletag": "<:battlenet:762122414301642765> Battle.net",
    "steam": "<:steam:762122414619885578> Steam",
    "origin": "<:origin:692813031976992768> Origin",
    "riot": "<:riot:705069119153635539> Riot",
    "trusted": "<:trusted:761281218314108940> • Trusted"
};
exports.status = {
    "EN": {
        "online": "<:onlineNew:727235195299954798> Online",
        "idle": "<:idleNew:727235195329052692> Idle",
        "dnd": "<:dndNew:727235195899740190> Do Not Disturb",
        "offline": "<:offlineNew:727235195417395260> Invisible"
    },
    "DE": {
        "online": "<:onlineNew:727235195299954798> Online",
        "idle": "<:idleNew:727235195329052692> Abwesend",
        "dnd": "<:dndNew:727235195899740190> Bitte nicht stören",
        "offline": "<:offlineNew:727235195417395260> Unsichtbar"
    }
};
exports.badges = {
    "EN": {
        "DISCORD_EMPLOYEE": "<:staff:714096470378414200> • Discord Staff",
        "DISCORD_PARTNER": "<:partnerNew:748855146464804926> • Partnered Server Owner",
        "HYPESQUAD_EVENTS": "<:hypesquad_events:714096470319693894> • HypeSquad Events",
        "BUGHUNTER_LEVEL_1": "<:bughunter:714096470424289298> • Discord Bug Hunter",
        "HOUSE_BRAVERY": "<:braverybadge:714096470395191337> • HypeSquad Bravery",
        "HOUSE_BRILLIANCE": "<:brilliancebadge:714096470319431751> • HypeSquad Brilliance",
        "HOUSE_BALANCE": "<:balancebadge:714096470290333836> • HypeSquad Balance",
        "EARLY_SUPPORTER": "<:early_supporter:714096470311043072> • Early Supporter",
        "TEAM_USER": "• Team User",
        "SYSTEM": "• System",
        "BUGHUNTER_LEVEL_2": "<:bughunterlvl2:733394314046210179> • Discord Bug Hunter 2",
        "VERIFIED_BOT": "<:verified_bot:725785496919212105> • Verified Bot",
        "EARLY_VERIFIED_DEVELOPER": "<:verified_developer:714096470328082563> • Early Verified Bot Developer",
        "VERIFIED_DEVELOPER": "<:verified_developer:714096470328082563> • Verified Bot Developer",
        "botdeveloper": "<:AruSmile:726566531428909078> • Bot Developer",
        "nitro": "<:nitro:772296275004882953> • Nitro",
        "guildowner": "<:guild_owner:725786774017933353> • Server Owner"
    },
    "DE": {
        "DISCORD_EMPLOYEE": "<:staff:714096470378414200> • Discord-Mitarbeiter",
        "DISCORD_PARTNER": "<:partnerNew:748855146464804926> • Eigentümer eines Partner-Servers",
        "HYPESQUAD_EVENTS": "<:hypesquad_events:714096470319693894> • HypeSquad-Events",
        "BUGHUNTER_LEVEL_1": "<:bughunter:714096470424289298> • Discord-Bugbuster",
        "HOUSE_BRAVERY": "<:braverybadge:714096470395191337> • HypeSquad Bravery",
        "HOUSE_BRILLIANCE": "<:brilliancebadge:714096470319431751> • HypeSquad Brilliance",
        "HOUSE_BALANCE": "<:balancebadge:714096470290333836> • HypeSquad Balance",
        "EARLY_SUPPORTER": "<:early_supporter:714096470311043072> • Supporter der ersten Stunde",
        "TEAM_USER": "• Team User",
        "SYSTEM": "• System",
        "BUGHUNTER_LEVEL_2": "<:bughunterlvl2:733394314046210179> • Discord-Bugbuster 2",
        "VERIFIED_BOT": "<:verified_bot:725785496919212105> • Verifizierter Bot",
        "EARLY_VERIFIED_DEVELOPER": "<:verified_developer:714096470328082563> • Verifizierter Bot-Entwickler der ersten Stunde",
        "VERIFIED_DEVELOPER": "<:verified_developer:714096470328082563> • Verifizierter Bot-Entwickler",
        "nitro": "<:nitro:772296275004882953> • Nitro",
        "guildowner": "<:guild_owner:725786774017933353> • Server-Eigentümer"
    }
};
exports.permissions = {
    "EN": {
        "CREATE_INSTANT_INVITE": "Create Invite",
        "KICK_MEMBERS": "Kick Members",
        "BAN_MEMBERS": "Ban Members",
        "ADMINISTRATOR": "Administrator",
        "MANAGE_CHANNELS": "Manage Channels",
        "MANAGE_GUILD": "Manage Server",
        "ADD_REACTIONS": "Add Reactions",
        "VIEW_AUDIT_LOG": "View Audit Log",
        "PRIORITY_SPEAKER": "Priority Speaker",
        "STREAM": "Video",
        "VIEW_CHANNEL": "Read Text Channels & See Voice Channels",
        "SEND_MESSAGES": "Send Messages",
        "SEND_TTS_MESSAGES": "Send TTS Messages",
        "MANAGE_MESSAGES": "Manage Messages",
        "EMBED_LINKS": "Embed Links",
        "ATTACH_FILES": "Attach Files",
        "READ_MESSAGE_HISTORY": "Read Message History",
        "MENTION_EVERYONE": "Mention @everyone, @here, and All Roles",
        "USE_EXTERNAL_EMOJIS": "Use External Emojis",
        "VIEW_GUILD_INSIGHTS": "View Server Insights",
        "CONNECT": "Connect",
        "SPEAK": "Speak",
        "MUTE_MEMBERS": "Mute Members",
        "DEAFEN_MEMBERS": "Deafen Members",
        "MOVE_MEMBERS": "Move Members",
        "USE_VAD": "Use Voice Activity",
        "CHANGE_NICKNAME": "Change Nickname",
        "MANAGE_NICKNAMES": "Manage Nicknames",
        "MANAGE_ROLES": "Manage Roles",
        "MANAGE_WEBHOOKS": "Manage Webhooks",
        "MANAGE_EMOJIS": "Manage Emojis"
    },
    "DE": {
        "CREATE_INSTANT_INVITE": "Einladung erstellen",
        "KICK_MEMBERS": "Mitglieder kicken",
        "BAN_MEMBERS": "Mitglieder bannen",
        "ADMINISTRATOR": "Administrator",
        "MANAGE_CHANNELS": "Kanäle verwalten",
        "MANAGE_GUILD": "Server verwalten",
        "ADD_REACTIONS": "Reaktionen hinzufügen",
        "VIEW_AUDIT_LOG": "Audit-Log einsehen",
        "PRIORITY_SPEAKER": "Very Important Speaker",
        "STREAM": "Video",
        "VIEW_CHANNEL": "Text- & Sprachkanäle anzeigen",
        "SEND_MESSAGES": "Nachrichten senden",
        "SEND_TTS_MESSAGES": "TTS-Nachrichten senden",
        "MANAGE_MESSAGES": "Nachrichten verwalten",
        "EMBED_LINKS": "Links einbetten",
        "ATTACH_FILES": "Dateien anhängen",
        "READ_MESSAGE_HISTORY": "Nachrichtenverlauf anzeigen",
        "MENTION_EVERYONE": "Erwähne @everyone, @here und „Alle Rollen“",
        "USE_EXTERNAL_EMOJIS": "Externe Emojis verwenden",
        "VIEW_GUILD_INSIGHTS": "Server-Einblicke anzeigen",
        "CONNECT": "Verbinden",
        "SPEAK": "Sprechen",
        "MUTE_MEMBERS": "Mitglieder stummschalten",
        "DEAFEN_MEMBERS": "Ein- und Ausgabe von Mitgliedern deaktivieren",
        "MOVE_MEMBERS": "Mitglieder verschieben",
        "USE_VAD": "Sprachaktivierung verwenden",
        "CHANGE_NICKNAME": "Nickname ändern",
        "MANAGE_NICKNAMES": "Nicknames verwalten",
        "MANAGE_ROLES": "Rollen verwalten",
        "MANAGE_WEBHOOKS": "WebHooks verwalten",
        "MANAGE_EMOJIS": "Emojis verwalten"
    }
};
exports.verification = {
    "EN": {
        "NONE": "None",
        "LOW": "Low",
        "MEDIUM": "Medium",
        "HIGH": "High",
        "VERY_HIGH": "Highest"
    },
    "DE": {
        "NONE": "Keine",
        "LOW": "Niedrig",
        "MEDIUM": "Mittel",
        "HIGH": "Hoch",
        "VERY_HIGH": "Höchste"
    }
};
exports.features = {
    "EN": {
        "ANIMATED_ICON": "Animated Server Icon",
        "BANNER": "Server Banner",
        "COMMERCE": "Commerce",
        "COMMUNITY": "Community",
        "DISCOVERABLE": "Published in Server Discovery",
        "FEATURABLE": "Featurable",
        "INVITE_SPLASH": "Splash Banner",
        "NEWS": "News",
        "PARTNERED": "Partnered",
        "PREVIEW_ENABLED": "Preview",
        "RELAY_ENABLED": "Relay",
        "VANITY_URL": "Vanity URL",
        "VERIFIED": "Verified",
        "VIP_REGIONS": "VIP Region",
        "WELCOME_SCREEN_ENABLED": "Welcome Screen",
        "MEMBER_VERIFICATION_GATE_ENABLED": "Verification Gate"
    },
    "DE": {
        "ANIMATED_ICON": "Animiertes Server Icon",
        "BANNER": "Server Banner",
        "COMMERCE": "Commerce",
        "COMMUNITY": "Community",
        "DISCOVERABLE": "Veröffentlicht in \"Server entdecken\"",
        "FEATURABLE": "Featurable",
        "INVITE_SPLASH": "Splash Banner",
        "NEWS": "News",
        "PARTNERED": "Partner",
        "PREVIEW_ENABLED": "Preview",
        "RELAY_ENABLED": "Relay",
        "VANITY_URL": "Vanity URL",
        "VERIFIED": "Verifiziert",
        "VIP_REGIONS": "VIP Region",
        "WELCOME_SCREEN_ENABLED": "Willkommensbildschirm",
        "MEMBER_VERIFICATION_GATE_ENABLED": "Verification Gate"
    }
};
exports.colors = {
    "error": "#dc143c",
    "dev": "#00b7eb",
    "notice": "#f1c40f",
    "default": "#ecd2db",
    "standard": "#7289da",
    "logGreen": "#00ff00",
    "logRed": "#ff0000",
    "logYellow": "#f1c40f",
    "none": "#000000",
    "invisible": "#36393f"
};
