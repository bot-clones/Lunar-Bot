const Discord = require('discord.js');
//here attachment
const { MessageAttachment } = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: 'drake',
  
  async run (client, message, args) {
    

const text1 = args.join(" ").split("/")[0]
const text2 = args.join(" ").split("/")[1]

if (!text1) return message.channel.send("<a:no:865963806483808256> You need 2 sentences separated with \"/\" for this to work.")
if (!text2) return message.channel.send("<a:no:865963806483808256> You need 2 sentences separated with \"/\" for this to work.")

const image = `https://api.popcatdev.repl.co/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`

const att = new Discord.MessageAttachment(image, "Drake.png")

message.channel.send(att)

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