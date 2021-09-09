const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "gay",
  aliases: [],
  category: "",
  description: "Return A Gay Image!",
  usage: "Gay | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Gay({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: Color });

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