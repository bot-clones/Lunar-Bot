const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const colors = require('./../../colors.json')

module.exports = {
  name: "set-channel",
  aliases: ["chatbot", "channel-set"],
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
if(!message.guild.me.hasPermission("MANAGE_CHANNELS"))
{
  return message.reply("<a:no:865963806483808256> I need manage channel permission to change the sowmode of the channel");
}

 
  let chatbot = db.fetch(`chatbotc_${message.guild.id}`);



if(!chatbot){
 if(!args[0])
  {
    return message.channel.send("<a:no:865963806483808256> You didnt gave me a channel!!");
  }
  var wchannel =  message.mentions.channels.first().id || args[0];
  var channel2 = message.mentions.channels.first();
  if(!channel2)
  {
    var channel2 = args[0];
    var channel2 = client.channels.cache.get(channel2);
  }
db.set(`chatbotc_${message.guild.id}`, wchannel);
let vc1 = "4";
 channel2.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
        
return message.reply(`<a:yes:865963544380964864> Done i Now i will talk in ${wchannel} and there will be slowmode Because of RateLimits`);
}else {
  return message.reply("<a:no:865963806483808256> You already have a chatbot channel first delete that from my command");
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