const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')
const Discord = require("discord.js")
module.exports = {
  name: "membercount",
  aliases: ['mc' , 'MemberCount' , 'Membercount'],
  usage: "*servericon",
  description: "Shows Icon of server",
  run: async (client, message, args) => {
    const { guild} = message 
    const {name,memberCount} = guild
    const icon = guild.iconURL() 
    let memberCountEmbed = new MessageEmbed()
    .setTitle(`Member Count for ${name}:`)
    .setDescription(memberCount)
    .setThumbnail(icon)
    .setFooter("BOT DEVELOPERS: RogmitOp | Prefix: !")
    message.channel.send(memberCountEmbed)
  },
};



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */