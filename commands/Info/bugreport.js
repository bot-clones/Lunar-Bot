const Discord = require('discord.js')
const colors = require('./../../colors.json')
const { webhook1 } = require("./../../config.json");

module.exports = {
  name: "bug-report",
  description: "bugreport command",
  aliases: ['bugreport'],

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Please add a bug to report!')

    message.reply(`✉ | ${message.author.username}, Thanks for the feedback! :)`)

    const bugReportEmbed = new Discord.MessageEmbed()
      .setColor(colors.uptime)
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Bug:`)
      .setDescription(`${args}`)
      .addField("On the server:", `${message.guild.name}`)
      .addField("Server ID:", `${message.guild.id}`)

    webhook1.send(bugReportEmbed)


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