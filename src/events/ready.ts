module.exports = async client => {
    setInterval(async function () {
        let presences = [{
                text: 'DMs for Support',
                type: 3
            },
            {
                text: 'to the student council',
                type: 3
            }, {
                text: client.commands.filter(cmd => cmd.group != 'Bot Owner').size + ' commands',
                type: 2
            }
        ];
        const random: any = presences[Math.floor(Math.random() * presences.length)];
        client.user.setActivity(random.text, {
            type: random.type
        });
    }, 30000)

    console.log('READY!');
}