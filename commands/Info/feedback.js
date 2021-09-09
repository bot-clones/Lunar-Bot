const Discord = require('discord.js')
const colors = require('./../../colors.json')
const { webhook } = require("./../../config.json");

module.exports = {
  name: "feedback",
  description: "feedback command (embed style)",

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Please add a reason to feedback!')

    message.reply(`✉ | ${message.author.username}, Thanks for the feedback! :)`)

    const feedbackEmbed = new Discord.MessageEmbed()
      .setColor(colors.uptime)
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Fedback:`)
      .setDescription(`${args}`)
      .addField("On the server:", `${message.guild.name}`)
      .addField("Server ID:", `${message.guild.id}`)

    webhook.send(feedbackEmbed)

    
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