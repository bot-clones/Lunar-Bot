const Discord = module.require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "members",
  aliases: ["memberscount", "membercount"],
  run: async (client, message, args) => {

 
  
  const embed = new Discord.MessageEmbed()
    .setAuthor("Members", message.guild.iconURL)
    .setColor(colors.uptime)
    .addField("Overall Members:", message.guild.memberCount || message.guild.members.size)
  
  message.channel.send(embed);
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