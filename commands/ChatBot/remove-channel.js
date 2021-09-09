 const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const colors = require('./../../colors.json')

module.exports = {
  name: "remove-channel",
  aliases: ["channel-remove"],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
 let chatbot = db.fetch(`chatbotc_${message.guild.id}`);
  if(chatbot){
    let vc1 = "0";
    let checkc = client.channels.cache.get(chatbot);
 checkc.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
        
     db.delete(`chatbotc_${message.guild.id}`);
     message.reply("<a:yes:865963544380964864> Done i have deleted the channel of chatbot from my database");
     return;
  }
  else {
    return message.reply("<a:no:865963806483808256> You dont have a channel Please add it first");
  }
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