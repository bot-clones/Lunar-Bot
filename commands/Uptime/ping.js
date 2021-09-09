const Discord = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {


        
   let circles = {
      green: "🟢",
      yellow: "🟡",
      red: "🔴"
  }

  const msg = await message.channel.send(new Discord.MessageEmbed()
  .setColor(colors.uptime) //you can change this
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .addField("Websocket", 
      `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
  ))

  let ping = msg.createdTimestamp - message.createdTimestamp;

  msg.edit(
      new Discord.MessageEmbed()
      .setColor(colors.uptime)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .addField("Websocket", 
      `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
  )
      .addField("RoundTrip",
      `${ping <= 200 ? circles.green : ping <= 400 ? circles.yellow : circles.red} ${ping} ms `
      )
  )
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