module.exports = {
    name: 'cmd.poll.name',
    description: 'cmd.poll.description',
    usage: 'cmd.poll.usage',
    args: true,
    dm: false,
    group: 'Utility',
    cooldown: 10,
    bot_permissions: [],
    user_permissions: [],
    aliases: ['vote'],
    async execute(message: any, args: any, client: any, prefix: any) {
        try {
            const emojiList: Array < string > = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣', '🔟'];
            const input: string = args.join(' ').split('|');
            const question: string = input[0];

            if (!question) return client.embeds.notice(message.channel, await client.strings(message.guild, 'cmd.poll.questionrequired'));

            const optionsList: Array < string > = input[1].split(',');

            if (emojiList.length < optionsList.length) return client.embeds.error(message.channel, await client.strings(message.guild, 'cmd.poll.options'));

            let optionsText: string = '';

            for (let i = 0; i < optionsList.length; i++) {
                optionsText += emojiList[i] + ' ' + optionsList[i] + '\n';
            }

            return client.embeds.uni(message.channel, optionsText, question, null, null, null, 0xD53C55, null, null).then(async function (msg) {
                const reactionArray: Array < any > = [];

                for (let i = 0; i < optionsList.length; i++) {
                    reactionArray[i] = await msg.react(emojiList[i]);
                }
            });
        } catch (error) {
            return client.embeds.error(message.channel, '```js\n' + error + '```' + await client.strings(message.guild, 'cmd.poll.error'));
        }
    }
}