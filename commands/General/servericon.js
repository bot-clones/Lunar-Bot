const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')
const Discord = require("discord.js")
module.exports = {
  name: "servericon",
  aliases: ['icon'],
  usage: "*servericon",
  description: "Shows Icon of server",
  run: async (client, message, args) => {
    const { guild } = message 
    //console.log(guild)
    
    const { name, region, memberCount, owner, afkTimeout } = guild 
    const icon = guild.iconURL() 
    //console.log(icon)
    //console.log(name, region, memberCount, icon, owner, afkTimeout)
    message.channel.send(`This Servers icon is: ${icon}`)
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