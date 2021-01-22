module.exports = {
    name: 'cmd.waifupack.name',
    description: 'cmd.waifupack.description',
    usage: 'cmd.waifupack.usage',
    args: true,
    dm: true,
    group: 'Waifu',
    cooldown: 10,
    bot_permissions: ['EMBED_LINKS'],
    user_permissions: [],
    aliases: ["-"],
    async execute(message: any, args: any, client: any, prefix: any) {
        let price = "30000"
        client.con.query("SELECT * FROM own_waifu WHERE userid = ?", [message.author.id], async (err: any, result: string) => {
            if(result.length == 5) {
                return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifupack.already"))
            } else {
                client.con.query("SELECT * FROM economy WHERE id = ?", [message.author.id], async (err: any, result: any) => {
                  if(result.length == 0) {
                      client.con.query("INSERT INTO economy (id, coins) VALUES (?, ?)", [message.author.id, "0"])
                      return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifupack.nomoney"))
                  }  else {
                      if(result[0].coins < price) {
                        return client.embeds.error(message.channel, await client.strings(message.guild, "cmd.waifupack.nomoney"))
                      } else {
                        let emb = await client.embeds.success(message.channel, await client.strings(message.guild, "cmd.waifupack.buy"))
                        emb.react("✅")
                      }
                  }
                })
            }
        })


    }
}
async function genRarity() {
    return new Promise(async (resolve, reject) => {
        let r = [{
            "name": "Legendary",
            "chance": 0.05
        }, {
            "name": "Mystic",
            "chance": 1
        }, {
            "name": "Rare",
            "chance": "10"
        }, {
            "name": "Common",
            "chance": 88.5
        }]
        let rr = [];
        r.forEach((n: any) => {
            let a: any = n.chance * 100;
            for(let i = 0; i < a; i++) {
                rr.push(n)
            }
        })
        resolve(rr[Math.floor(Math.random() ** rr.length)].name)
    })
}