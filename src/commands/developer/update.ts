import {
  exec
} from 'child_process';

module.exports = {
  name: 'cmd.update.name',
  description: 'cmd.update.description',
  usage: 'cmd.update.usage',
  args: true,
  dm: true,
  group: 'Bot Owner',
  cooldown: 2,
  bot_permissions: ['SEND_MESSAGES'],
  user_permissions: [],
  aliases: [],
  async execute(message: any, args: any, client: any, prefix: any) {
    if (process.platform == 'linux') {
      client.embeds.success(message.channel, 'Downloading, Installing and restarting the Bot.');
      exec('git pull git@chika:Chika-Discord/Chika.git && npm i && pm2 restart chika', (err, stdout, stderr) => {
        if (err) {
          return undefined;
        }
      });
    } else {
      client.embeds.error(message.channel, 'This Instance is not running on the Server.');
    }
  }
}