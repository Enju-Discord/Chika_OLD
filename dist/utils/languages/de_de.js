"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "dj.perms_missing": "🚫 $user, du benötigst die `Nachrichten verwalten` Berechtigung oder die $role Rolle um diesen Befehl verwenden zu können.",
    "message.dev": "🚫 Dir ist es nicht gestattet diesen Befehl auszuführen.",
    "message.dm": "🚫 Du kannst diesen Befehl nicht in den Direktnachrichten verwenden.",
    "message.cooldown": "🚫 Du musst noch $seconds Sekunden warten bevor du den $cmd Befehl erneut verwenden kannst.",
    "message.dm.error": "🚫 Beim Ausführen dieses Befehls ist ein Fehler aufgetreten.",
    "message.bot_permissions_missing": "🚫 Mir fehlen Berechtigungen zum Ausführen dieser Aktion.\nIch benötige dazu die `$permission` Berechtigung.",
    "message.user_permissions_missing": "🚫 $user, du benötigst die `$permission` Berechtigung damit du diesen Befehl verwenden kannst.",
    "message.server.error": "🚫 Beim Ausführen dieses Befehls ist ein Fehler aufgetreten.",
    "cmd.autorole.name": "autorole",
    "cmd.autorole.description": "setzte eine Rolle für neue Nutzer",
    "cmd.autorole.usage": "`autorole` (<rolle>) - setzte autorolle\n`autorole` (<delete>) - lösche autorolle die gesetzt wurde",
    "cmd.autorole.rolerequired": "⚠️ Bitte gib eine Rolle an.",
    "cmd.autorole.current": "Die aktuelle Autorolle ist $autorole.",
    "cmd.autorole.delete": "Autorolle wurde gelöscht.",
    "cmd.autorole.rolenotfound": "🚫 Diese Rolle existiert nicht auf diesem Server.",
    "cmd.autorole.set": "$autorole wurde als Autorolle festgelegt.",
    "cmd.goodbye.name": "goodbye",
    "cmd.goodbye.description": "sende eine Nachricht wenn Nutzer verlassen",
    "cmd.goodbye.usage": "`goodbye` (<kanal>) (<nachricht>) - sende eine Goodbye-Nachricht\n`goodbye` (<delete>) - deaktiviere die Goodbye-Nachricht\n`goodbye` (<reset>) - setze die Goodbye-Nachricht auf Standardwert zurück\n`$user` - erwähne den Nutzer der verlassen hat\n`$guild` - erwähne den Servernamen",
    "cmd.goodbye.currentchan": "Kanal",
    "cmd.goodbye.msg": "Nachricht",
    "cmd.goodbye.channelrequired": "⚠️ Bitte gib einen Kanal an.",
    "cmd.goodbye.deleted": "Goodbye-Nachricht wurde deaktiviert.",
    "cmd.goodbye.channelnotfound": "🚫 Dieser Kanal existiert nicht auf diesem Server.",
    "cmd.goodbye.length": "🚫 Du kannst keine Goodbye-Nachricht mit mehr als 800 Zeichen setzen.",
    "cmd.goodbye.default": "Goodbye-Nachricht wurde auf ihren Standardwert zurückgesetzt.",
    "cmd.goodbye.set": "Goodbye-Nachricht wurde in $channel festgelegt.",
    "cmd.language.name": "language",
    "cmd.language.description": "setze die Sprache des Bots\nvalid language ids: `en_us, de_de`",
    "cmd.language.usage": "`language` (<languageID>) - ändere Sprache",
    "cmd.language.current.de": "<:flagde:800512077499727882> Die aktuelle Sprache ist `$lang`.",
    "cmd.language.set.de": "<:flagde:800512077499727882> Sprache wurde zu `$lang` geändert.",
    "cmd.prefix.name": "prefix",
    "cmd.prefix.description": "ändere das bot präfix",
    "cmd.prefix.usage": "`prefix` (<prefix>) - ändere präfix\n`prefix` (<reset>) - setze präfix auf Standardwert zurück",
    "cmd.prefix.error": "🚫 Ähm... nein.",
    "cmd.prefix.currentprefix": "Das aktuelle Präfix ist `$prefix`",
    "cmd.prefix.length": "🚫 Du kannst kein Präfix mit mehr als 5 Zeichen setzen.",
    "cmd.prefix.default": "Das Präfix wurde zu seinem Standardwert zurückgesetzt.",
    "cmd.prefix.set": "Das Präfix dieses Servers lautet jetzt `$prefix`.",
    "cmd.welcome.name": "welcome",
    "cmd.welcome.description": "sende eine Nachricht wenn Nutzer beitreten",
    "cmd.welcome.usage": "`welcome` (<kanal>) (<nachricht>) - sende eine Beitrittsnachricht\n`welcome` (<delete>) - deaktiviere die Beitrittsnachricht\n`welcome` (<reset>) - setze die Beitrittsnachricht auf Standardwert zurück\n`$user` - erwähne den Nutzer der beigetreten ist\n`$guild` - erwähne den Servernamen",
    "cmd.welcome.currentchan": "Kanal",
    "cmd.welcome.msg": "Nachricht",
    "cmd.welcome.channelrequired": "⚠️ Bitte gib einen Kanal an.",
    "cmd.welcome.deleted": "Willkommensnachricht wurde deaktiviert.",
    "cmd.welcome.channelnotfound": "🚫 Dieser Kanal existiert nicht auf diesem Server.",
    "cmd.welcome.length": "🚫 Du kannst keine Willkommensnachricht mit mehr als 800 Zeichen setzen.",
    "cmd.welcome.default": "Willkommensnachricht wurde auf ihren Standardwert zurückgesetzt.",
    "cmd.welcome.set": "Willkommensnachricht wurde in $channel festgelegt.",
    "cmd.eval.name": "eval",
    "cmd.eval.description": "Evaluiere code Schnipsel im Discord Chat",
    "cmd.eval.usage": "`eval` (<code>)",
    "cmd.update.name": "update",
    "cmd.update.description": "aktualisiere den Discord Bot Client",
    "cmd.update.usage": "`update` - änderungen von Github ziehen",
    "cmd.daily.name": "daily",
    "cmd.daily.description": "sammle deine tägliche Belohnung ein",
    "cmd.daily.usage": "`daily` - sammle yen ein",
    "cmd.daily.get": "$user, du hast deine täglichen `$yen` Yen eingesammelt. 💴",
    "cmd.daily.claimed": "🚫 $user, du hast bereits deine tägliche Belohnung eingesammelt.\nNächste Belohnung in: $timeleft",
    "cmd.monthly.name": "monthly",
    "cmd.monthly.description": "sammle deine monatliche Belohnung ein",
    "cmd.monthly.usage": "`monthly` - sammle yen ein",
    "cmd.monthly.get": "$user, du hast deine monatliche `$yen` Yen eingesammelt. 💴",
    "cmd.monthly.claimed": "🚫 $user, du hast bereits deine monatliche Belohnung eingesammelt.\nNächste Belohnung in: $timeleft",
    "cmd.weekly.name": "weekly",
    "cmd.weekly.description": "sammle deine wöchentliche Belohnung ein",
    "cmd.weekly.usage": "`weekly` - sammle yen ein",
    "cmd.weekly.get": "$user, du hast deine wöchentlichen `$yen` Yen eingesammelt. 💴",
    "cmd.weekly.claimed": "🚫 $user, du hast bereits deine wöchentliche Belohnung eingesammelt.\nNächste Belohnung in: $timeleft",
    "cmd.yen.name": "yen",
    "cmd.yen.description": "überprüfe deinen kontostand",
    "cmd.yen.usage": "`yen` ([member]) - überprüfe deine yen",
    "cmd.yen.result": "$user hat derzeit `$yen` Yen. 💴",
    "cmd.help.name": "help",
    "cmd.help.description": "zeigt Liste aller Befehle oder Hilfe für einen bestimmten Befehl",
    "cmd.help.usage": "`help` - zeigt Befehlsliste\n`help` (<befehl>) - zeigt Hilfe für einen bestimmten Befehl",
    "cmd.help.aliases_field": "Aliasse",
    "cmd.help.group_field": "Gruppe",
    "cmd.help.dm_field": "DM Kompatibel",
    "cmd.help.description_field": "Beschreibung",
    "cmd.help.usage_field": "Verwendung",
    "cmd.help.bot_permissions_field": "Berechtigungen: Bot",
    "cmd.help.user_permissions_field": "Berechtigungen: Nutzer",
    "cmd.help.configuration": "Konfiguration",
    "cmd.help.developer": "Bot Owner",
    "cmd.help.economy": "Wirtschaft",
    "cmd.help.fun": "Spaß",
    "cmd.help.general": "Generel",
    "cmd.help.image": "Bilder",
    "cmd.help.moderation": "Moderation",
    "cmd.help.music": "Musik",
    "cmd.help.roleplay": "Roleplay",
    "cmd.help.utility": "Nützliches",
    "cmd.help.title": "Befehlsliste",
    "cmd.help.footer": "<> benötigt | [] optional",
    "cmd.info.name": "info",
    "cmd.info.description": "Etwas zusätzliche Hilfe.",
    "cmd.info.usage": "`info` - bot statistiken",
    "cmd.info.basics": "Basics",
    "cmd.info.basics.info": "$client, created by $devs\nAktuell aktiv auf $guilds Servern mit einer Gesamtzahl von $users Nutzern\n\nBetriebszeit: $uptime\nPing: $ping",
    "cmd.info.resources": "Ressourcennutzung",
    "cmd.info.resources.info": "CPU-Auslastung: $usage\nRAM-Nutzung: $usage2 verwendet von $usage3",
    "cmd.info.support": "Support",
    "cmd.info.support.info": "$link",
    "cmd.info.invite": "Einladungslink",
    "cmd.ban.name": "ban",
    "cmd.ban.description": "banne einen Nutzer",
    "cmd.ban.usage": "`ban` (<nutzer>) ([grund]) - banne jemanden",
    "cmd.ban.userrequired": "⚠️ Bitte erwähne den Nutzer den du bannen möchtest.",
    "cmd.ban.usernotfound": "🚫 Dieser Nutzer existiert nicht auf diesem Server.",
    "cmd.ban.userisbot": "🚫 Denkst du wirklich ich würde mich selbst bannen?",
    "cmd.ban.userisowner": "🚫 Denkst du wirklich ich könnte den Inhaber dieses Servers bannen?",
    "cmd.ban.noban": "🚫 Dieser Nutzer kann nicht gebannt werden.",
    "cmd.ban.selfban": "🚫 Warum willst du dich selbst bannen?",
    "cmd.ban.user": "Nutzer",
    "cmd.ban.moderator": "Moderator",
    "cmd.ban.reason": "Grund",
    "cmd.ban.banned": "Gebannt",
    "cmd.kick.name": "kick",
    "cmd.kick.description": "kicke einen Nutzer",
    "cmd.kick.usage": "`kick` (<nutzer>) ([grund]) - kicke jemanden",
    "cmd.kick.userrequired": "⚠️ Bitte erwähne den Nutzer den du kicken möchtest.",
    "cmd.kick.usernotfound": "🚫 Dieser Nutzer existiert nicht auf diesem Server.",
    "cmd.kick.userisbot": "🚫 Denkst du wirklich würde mich selbst kicken?",
    "cmd.kick.userisowner": "🚫 Denkst du wirklich ich könnte den Inhaber dieses Servers kicken?",
    "cmd.kick.nokick": "🚫 Dieser Nutzer kann nicht gekickt werden.",
    "cmd.kick.selfban": "🚫 Warum willst du dich selbst kicken?",
    "cmd.kick.user": "Nutzer",
    "cmd.kick.moderator": "Moderator",
    "cmd.kick.reason": "Grund",
    "cmd.kick.banned": "Gekickt",
    "cmd.djrole.name": "djrole",
    "cmd.djrole.description": "lege eine Rolle fest, die Nutzer benötigen um Musikbefehle verwenden zu können\nsollte dies deaktiviert werden sollen, verwende ein `delete` anstatt der Rolle",
    "cmd.djrole.usage": "`djrole` (<rolle>) - lege eine DJ Rolle fest",
    "cmd.djrole.rolerequired": "⚠️ Bitte gib eine Rolle an.",
    "cmd.djrole.currentrole": "Aktuell ist $role als DJ Rolle festgelegt.",
    "cmd.djrole.roledeleted": "DJ Rolle wurde gelöscht.",
    "cmd.djrole.rolenotexist": "🚫 Diese Rolle existiert nicht auf diesem Server.",
    "cmd.djrole.set": "$role wurde als DJ Rolle festgelegt.",
    "cmd.loop.name": "loop",
    "cmd.loop.description": "aktiviere loop für die Musikwarteschlange",
    "cmd.loop.usage": "`loop` - loope die Musikwarteschlange",
    "cmd.loop.noqueue": "🚫 Aktuell wird nichts abgespielt.",
    "cmd.loop.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `loop` Befehl verwenden kannst.",
    "cmd.loop.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.loop.looped": "Loop ist jetzt $looped.",
    "cmd.loop.enabled": "aktiviert",
    "cmd.loop.disabled": "deaktiviert",
    "cmd.np.name": "np",
    "cmd.np.description": "zeigt Informationen über den aktuellen Song",
    "cmd.np.usage": "`np` - Song-Infos abrufen",
    "cmd.np.noqueue": "🚫 Aktuell wird nichts abgespielt.",
    "cmd.pause.name": "pause",
    "cmd.pause.description": "pausiere den aktuellen song",
    "cmd.pause.usage": "`pause` - pausiere die Wiedergabe",
    "cmd.pause.noqueue": "🚫 Aktuell wird nichts abgespielt.",
    "cmd.pause.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `pause` Befehl verwenden kannst.",
    "cmd.pause.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.pause.paused": "⏸ Wiedergabe wurde pausiert.",
    "cmd.pause.paused_no": "Aktuell wird nichts abgespielt was ich pausieren könnte.",
    "cmd.play.name": "play",
    "cmd.play.description": "spiele Musik in einem Sprachkanal ab",
    "cmd.play.usage": "`play` (<link>) - spiele ein Youtube Video ab\n`play` (<arguments>) - suche nach einem Youtube Video",
    "cmd.play.nochannel": "🚫 Du musst zuerst einem Sprachkanal beitreten damit du Musik abspielen kannst.",
    "cmd.play.linkrequired": "⚠️ Bitte gib einen gültigen Youtube Link an.",
    "cmd.play.nospotify": "🚫 Spotify wird zurzeit nicht unterstützt. <:spotify:800180960494354432>",
    "cmd.play.playlistuse": "⚠️ Wenn du du eine Playlist abspielen möchtest, verwende den `playlist` Befehl.",
    "cmd.play.requester": "Hinzugefügt von",
    "cmd.play.duration": "Dauer",
    "cmd.play.channel": "Youtube Kanal",
    "cmd.play.added": "✅ Hinzugefügt zur Musikwarteschlange",
    "cmd.play.start": "🎶 Musik hat angefangen zu spielen",
    "cmd.play.noresults": "🚫 Ich konnte keine Suchergebnisse erhalten.",
    "cmd.play.enter": "Bitte gib eine Zahl zwischen 1-$videos ein, um deinen Song auszuwählen.",
    "cmd.play.canceled": "🚫 Keine oder ungültige Nummer eingegeben, Songauswahl wurde abgebrochen.",
    "cmd.queue.name": "queue",
    "cmd.queue.description": "zeigt die Musikwarteschlange für deinen Server an",
    "cmd.queue.usage": "`queue` - zeigt alle Songs an",
    "cmd.queue.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.queue.queue": "Musikwarteschlange: $server",
    "cmd.remove.name": "remove",
    "cmd.remove.description": "entferne einen bestimmten Song aus der Musikwarteschlange.",
    "cmd.remove.usage": "`remove` (<nummer>) - entferne Song",
    "cmd.remove.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.remove.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `remove` Befehl verwenden kannst.",
    "cmd.remove.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.remove.validsong": "⚠️ Bitte gib eine gültige Nummer an.",
    "cmd.remove.removed": "$song wurde aus der Musikwarteschlange entfernt.",
    "cmd.resume.name": "resume",
    "cmd.resume.description": "setze die Wiedergabe des aktuellen Songs fort",
    "cmd.resume.usage": "`resume` - setze die Wiedergabe fort",
    "cmd.resume.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.resume.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `resume` Befehl verwenden kannst.",
    "cmd.resume.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.resume.resumed": "▶ Wiedergabe wurde forgesetzt.",
    "cmd.resume.resumed_no": "🚫 Aktuell wird nichts abgespielt was ich fortsetzen könnte.",
    "cmd.shuffle.name": "shuffle",
    "cmd.shuffle.description": "mische die Musikwarteschlange",
    "cmd.shuffle.usage": "`shuffle` - mische Songs",
    "cmd.shuffle.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.shuffle.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `shuffle` Befehl verwenden kannst.",
    "cmd.shuffle.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.shuffle.shuffle": "🔀 The Musikwarteschlange wurde gemischt.",
    "cmd.skip.name": "skip",
    "cmd.skip.description": "skip the song that is currently playing",
    "cmd.skip.usage": "`skip` - skip the current song",
    "cmd.skip.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.skip.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `skip` Befehl verwenden kannst.",
    "cmd.skip.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.skip.pause": "🚫 Dieser Befehl ist nicht verfügbar da die Wiedergabe pausiert ist.",
    "cmd.skip.voted": "🚫 $user, du hast bereits abgestimmt.\nAktuelle Votes: $votes",
    "cmd.skip.skipped": "⏩ $song wurde übersprungen.",
    "cmd.skip.votes": "Aktuelle Votes: $votes",
    "cmd.skipto.name": "skipto",
    "cmd.skipto.description": "springe zu einem bestimmten Song in der Musikwarteschlange indem du die Song-Nummer eingibst.",
    "cmd.skipto.usage": "`skipto` (<nummer>) - überspringe songs",
    "cmd.skipto.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.skipto.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `skipto` Befehl verwenden kannst.",
    "cmd.skipto.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.skipto.nosongs": "🚫 Du kannst keine Songs überspringen die nicht existieren.",
    "cmd.skipto.number": "⚠️ Bitte gib eine gültige Nummer an.",
    "cmd.skipto.skipped": "⏩ $songs Songs wurden übersprungen.",
    "cmd.stop.name": "stop",
    "cmd.stop.description": "stoppe den aktuellen Song",
    "cmd.stop.usage": "`stop` - stoppe die Wiedergabe",
    "cmd.stop.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.stop.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `stop` Befehl verwenden kannst.",
    "cmd.stop.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.stop.stopped": "⏹️ Wiedergabe wurde gestoppt.",
    "cmd.volume.name": "volume",
    "cmd.volume.description": "kontrolliere die Lautstärke der Musikwarteschlange",
    "cmd.volume.usage": "`volume` - ändere Lautstärke",
    "cmd.volume.noqueue": "🚫 Auf diesem Server befindet sich keine Musikwarteschlange.",
    "cmd.volume.nochannel": "🚫 Du musst dich in einem Sprachkanal befinden damit du den `volume` Befehl verwenden kannst.",
    "cmd.volume.nochannel_bot": "🚫 Ich bin nicht in deinem Sprachkanal.",
    "cmd.volume.current": "Die aktuelle Lautstärke beträgt $volume.",
    "cmd.volume.numberrequired": "⚠️ Bitte gib eine gültige Nummer an.",
    "cmd.volume.max": "🚫 Du kannst die Lautstärke nicht über 200% setzen.",
    "cmd.volume.set": "Ich habe die Lautstärke auf $volume gesetzt.",
    "cmd.poll.name": "poll",
    "cmd.poll.description": "erstelle eine Umfrage mit verschiedenen Optionen",
    "cmd.poll.usage": "`poll` (<frage|[option1],[option2]) - erstelle eine Umfrage",
    "cmd.poll.questionrequired": "⚠️ Bitte gib eine Frage an.",
    "cmd.poll.options": "🚫 Du kannst nicht mehr als 10 Optionen hinzufügen.",
    "cmd.poll.error": "\n\n🚫 Dies kann daran liegen, dass du vergessen hast Optionen einzugeben.",
    "cmd.serverinfo.name": "serverinfo",
    "cmd.serverinfo.description": "zeigt Infos über diesen Server",
    "cmd.serverinfo.usage": "`serverinfo` - zeigt server infos",
    "cmd.serverinfo.noservericon": "Keine Server Icon URL",
    "cmd.serverinfo.nosplashicon": "Keine Splash Icon URL",
    "cmd.serverinfo.verification": "Verifikationslevel",
    "cmd.serverinfo.id": "ID",
    "cmd.serverinfo.owner": "Besitzer",
    "cmd.serverinfo.members": "Mitglieder",
    "cmd.serverinfo.humans": "Nutzer",
    "cmd.serverinfo.bots": "Bots",
    "cmd.serverinfo.text": "Text-Kanäle",
    "cmd.serverinfo.voice": "Sprach-Kanäle",
    "cmd.serverinfo.region": "Region",
    "cmd.serverinfo.boostlevel": "Boost Level",
    "cmd.serverinfo.boosts": "Boosts",
    "cmd.serverinfo.created": "Erstellungsdatum",
    "cmd.serverinfo.roles": "Rollen",
    "cmd.serverinfo.emojis": "Emojis",
    "cmd.serverinfo.features": "Features",
    "cmd.serverinfo.iconURL": "Icon URL",
    "cmd.serverinfo.splashURL": "Splash URL",
    "cmd.userinfo.name": "userinfo",
    "cmd.userinfo.description": "zeigt Informationen über dich oder ein bestimmtes Mitglied.",
    "cmd.userinfo.usage": "`userinfo` (<nutzer>) - zeigt nutzer infos",
    "cmd.userinfo.nameAndDis": "Name + Tag",
    "cmd.userinfo.nickname": "Nickname",
    "cmd.userinfo.id": "ID",
    "cmd.userinfo.status": "Status",
    "cmd.userinfo.activity": "Aktivität",
    "cmd.userinfo.client": "Client",
    "cmd.userinfo.selfMute": "Stumm",
    "cmd.userinfo.selfMute.options": "$self Selbst\n$server Server",
    "cmd.userinfo.selfDeaf": "Taub",
    "cmd.userinfo.selfDeaf.options": "$self Selbst\n$server Server",
    "cmd.userinfo.roles": "Rollen",
    "cmd.userinfo.permissions": "Berechtigungen",
    "cmd.userinfo.badges": "Abzeichen",
    "cmd.userinfo.createdAt": "Account-Erstellungsdatum",
    "cmd.userinfo.joinedAt": "Server-Beitrittsdatum",
    "cmd.userinfo.avatar": "Avatar",
    "cmd.waifu.name": "Waifu",
    "cmd.waifu.description": "zeigt deine ausgewählte Waifu an",
    "cmd.waifu.usage": "`waifu` - zeigt deine Waifu an",
    "cmd.waifu.nope": "🚫 Du besitzt keine Waifu.",
    "cmd.waifu.name_field": "Name",
    "cmd.waifu.health_field": "Gesundheit",
    "cmd.waifu.strength_field": "Stärke",
    "cmd.waifu.second": "Zweite Waifu",
    "cmd.waifu.field_description": "Beschreibung",
    "cmd.waifu.type_field": "Type",
    "cmd.waifu.footer": "Waifu System <3",
    "cmd.switch.name": "switch",
    "cmd.switch.description": "wechsel zu einer anderen Waifu die du besitzt.",
    "cmd.switch.usage": "`switch` - wechsel zu einer anderen Waifu.",
    "cmd.switch.noid": "🚫 Ich konnte kein Waifu mit der ID finden.",
    "cmd.switch.switched": "Erfolgreich gewechselt zu: ",
    "cmd.waifupack.name": "waifupack",
    "cmd.waifupack.description": "kaufe ein Waifupacket.",
    "cmd.waifupack.usage": "`waifupack` - kaufe ein Packet an Waifus.",
    "cmd.waifupack.already": "🚫 Du besitzt bereits 5 Waifus.",
    "cmd.waifupack.nomoney": "🚫 Du besitzt nicht genug Geld!",
};
