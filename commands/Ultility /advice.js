const api = require("srod-v2");
const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "advice",
  aliases: [],
  description: "Return A Random Advice!",
  usage: "Advice",
  run: async (client, message, args) => {
    
    const Data = await api.GetAdvice({ Color: "#39d822" });
    return message.channel.send(Data);
  }
};


/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */