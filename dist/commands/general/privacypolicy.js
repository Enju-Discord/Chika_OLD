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
    aliases: ['privacy', 'pp'],
    async execute(message, args, client, prefix) {
        return client.embeds.uni(message.channel, '**What Data will be stored if you use any command of Chika?**\n\n● If you execute a command, configurations like your servers id will get collected.\n● If you execute the daily command or the yen command, Chika will collect your ID.\n● Your Tradingcards will be stored.\n●Your Card inventory will also be stored.\n\n **Where and how is Chika saving the data?** \n\n● Chika is storing your data in a MySQL database.\n● Your servers data will get deleted if the bot leaves your discord server.\n\nIf you want to request a deletion of your data, reach out to our [support](https://discord.gg/xqTKXh3DBN).', 'Chika Bot Privacy Policy', null, null, null, null, null);
    }
};
