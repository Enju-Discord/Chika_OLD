module.exports = {
    name: 'cmd.privacypolicy.name',
    description: 'cmd.privacypolicy.description',
    usage: 'cmd.privacypolicy.usage',
    args: true,
    dm: true,
    group: 'General',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['privacy'],
    async execute(message: any, args: any, client: any, prefix: any) {
        client.embeds.uni(message.channel, "**What Data get stored if you run a command of Chika?** \n\n● If you run a command like, settings like GuildID will get collected! \n● If you are running the daily command or the coins command Chika will collect your UserID!\n● Your Tradingcards will be stored. \n●Your Card inventroy will be also stored \n\n **Where and how is Chika saving the Data?** \n\n● Chika is storing you data in a MySQL database. Your guild data will get deleted if the bot leave's your discord server! \n\n**How can I delete my data?** \n\n●Your guild data will get deleted if you kick the bot or the bot leaves your guild! If you want that your user data will get deleted just contact our support!!", "Chika Bot Privacy Policy", null, null, null, null, "Written by Chika Development Team. If you have any questions contact our Support!")
    }
}