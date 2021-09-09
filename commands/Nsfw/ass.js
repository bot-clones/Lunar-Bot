const client = require('nekos.life');
var Discord = require('discord.js')
const config = require('../../config');
const superagent = require('superagent');
const colors = require('./../../colors.json')
const neko = new client();


module.exports = {
        name: 'ass',
        description: 'ass images',
        aliases: ["nsfw"],
        usage: '<user>',
        accessableby: "",

  run: async (client, message, args) => {
    let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent

      var errMessage = `!I caught a pervert!,  >:3 The channel ain't nsfw, pervert u-u`;
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 30000 })
      })
      
  }

    var lo = new Discord.MessageEmbed()
                .setDescription(`Loading...<a:portal:865979487787417631>`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[Image does not load? Click here](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter(client.footer)
            
            m.edit(embed_nsfw);

   });
    });
  }
  }



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */