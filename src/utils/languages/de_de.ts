export default {
    "dj.perms_missing": "🚫 $user, du benötigst die `Nachrichten verwalten` Berechtigung oder die $role Rolle um diesen Befehl verwenden zu können.",
    "message.dev": "🚫 Dir ist es nicht gestattet diesen Befehl auszuführen.",
    "message.dm": "🚫 Du kannst diesen Befehl nicht in den Direktnachrichten verwenden.",
    "message.cooldown": "🚫 Du musst noch $seconds Sekunden warten bevor du den $cmd Befehl erneut verwenden kannst.",
    "message.dm.error": "🚫 Beim Ausführen dieses Befehls ist ein Fehler aufgetreten.",
    "message.bot_permissions_missing": "🚫 Mir fehlen Berechtigungen zum Ausführen dieser Aktion.\nIch benötige dazu die `$permission` Berechtigung.",
    "message.user_permissions_missing": "🚫 $user, du benötigst die `$permission` Berechtigung damit du diesen Befehl verwenden kannst.",
    "message.server.error": "🚫 Beim Ausführen dieses Befehls ist ein Fehler aufgetreten.",
    "cmd.language.name": "language",
    "cmd.language.description": "setze die Sprache des Bots\nvalid language ids: `en_us, de_de`",
    "cmd.language.usage": "`language` (<languageID>) - ändere Sprache",
    "cmd.language.current.de": "<:flagde:800512077499727882> Die aktuelle Sprache ist: $lang",
    "cmd.language.set.de": "<:flagde:800512077499727882> Sprache wurde geändert zu: $lang",
    "cmd.eval.name": "eval",
    "cmd.eval.description": "Evaluiere code Schnipsel im Discord Chat",
    "cmd.eval.usage": "`eval` (<code>)",
    "cmd.update.name": "update",
    "cmd.update.description": "aktualisiere den Discord Bot Client",
    "cmd.update.usage": "`update` - änderungen von Github ziehen",
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
    "cmd.info.basics.info": "$client\nAktuell aktiv auf $guilds Servern mit einer Gesamtzahl von $users Nutzern\n\nBetriebszeit: $uptime\nPing: $ping",
    "cmd.info.resources": "Ressourcennutzung",
    "cmd.info.resources.info": "CPU-Auslastung: $usage\nRAM-Nutzung: $usage2 verwendet von $usage3",
    "cmd.info.support": "Support",
    "cmd.info.support.info": "$link",
    "cmd.info.invite": "Einladungslink",
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
    "cmd.waifu.usage": "`waifu` - zeige deine Waifu an",
    "cmd.waifu.nope": "🚫 Sorry aber du besitzt keine Waifu.",
    "cmd.waifu.name_field": "Name",
    "cmd.waifu.health_field": "Gesundheit",
    "cmd.waifu.strength_field": "Stärke",
    "cmd.waifu.second": "Zweite Waifu",
    "cmd.waifu.field_description": "Beschreibung",
    "cmd.waifu.footer": "Waifu System <3",
}