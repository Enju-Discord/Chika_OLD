module.exports = {
    name: 'command.help.name',
    description: 'command.help.description',
    usage: 'command.help.usage',
    example: 'command.help.example',
    args: true,
    dm: true,
    developer: false,
    botpermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    userpermissions: [],
    aliases: [],
    cooldown: 10,
    async execute(message, args, client, prefix) {
        return this;
    }
};
