import {
  exec
} from 'child_process';
import {
  MessageEmbed
} from 'discord.js';

//git pull git@chika:Chika-Discord/Chika.git && npm i && pm2 restart chika
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
      let embed: any = new MessageEmbed()
        .setTitle('Update Requested by ' + message.author.tag)
        .setDescription('<a:Loading:800458223891120199> Preparing for Update.')
        .setColor('#edc01c')
      let embmsg: any = await message.channel.send(embed)

      embed.setDescription('<a:Loading:800458223891120199>   Pulling changes from GitHub...\n<:idle:507524745378398210>   Installing Node Modules...\n<:idle:507524745378398210>   Restarting Bot...')
      embmsg.edit(embed)
      setTimeout(() => {
        exec('git pull git@chika:Chika-Discord/Chika.git', (err, stdout, stderr) => {
          if (!err) {
            setTimeout(() => {
              embed.setDescription('<:greenTick:718980916449378365>   Pulling changes from GitHub...\n<a:Loading:800458223891120199>   Installing Node Modules...\n<:idle:507524745378398210>   Restarting Bot...')
              embmsg.edit(embed)
              exec('npm i', (err, stdout, stderr) => {
                if (!err) {
                  embed.setDescription('<:greenTick:718980916449378365>   Pulling changes from GitHub...\n<:greenTick:718980916449378365>   Installing Node Modules...\n<a:Loading:800458223891120199>   Restarting Bot...')
                  embmsg.edit(embed)
                  setTimeout(() => {
                    embed.setDescription('<:greenTick:718980916449378365>   Pulling changes from GitHub...\n<:greenTick:718980916449378365>   Installing Node Modules...\n<:redTick:718980916076347423>   Restarting Bot...\n\nAn unknown Error occured while Updating.\nStopping the Update.')
                      .setColor('#ed311c')
                    embed.edit(embed)
                    exec('pm2 restart chika', (err, stdout, stderr) => {
                      if (err) {
                        embed.setDescription('<:greenTick:718980916449378365>   Pulling changes from GitHub...\n<:greenTick:718980916449378365>   Installing Node Modules...\n<:greenTick:718980916449378365>   Restarting Bot...\n\nSuccessfully updated the Bot!')
                          .setColor('#1ced3b')
                        embmsg.edit(embed)
                      } else {
                      }
                    })
                  }, 2000)
                } else {
                  embed.setDescription('<:greenTick:718980916449378365>   Pulling changes from GitHub...\n<:redTick:718980916076347423>   Installing Node Modules...\n<:idle:507524745378398210>   Restarting Bot...\n\nAn unknown Error occured while Updating.\nStopping the Update.')
                    
                  embed.edit(embed)
                }
              })
            }, 2000)
          } else {
            embed.setDescription('<:redTick:718980916076347423>   Pulling changes from GitHub...\n<:idle:507524745378398210>   Installing Node Modules...\n<:idle:507524745378398210>   Restarting Bot...')
              .setColor('#ed311c')
            embmsg.edit(embed)
          }
        });
      }, 2000)
    } else {
      client.embeds.error(message.channel, 'This Instance is not running on the Server.');
    }
  }
}