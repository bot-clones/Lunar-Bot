const {
  Color
} = require('../../config.json');
const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "jail",
  aliases: ["j"],
  description: "Shows image of jail",
  usage: "<user>",
  run: async (client, message, args) => {

    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(colors.uptime)
    .setTitle("Jail")
    .setImage(encodeURI
      (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({
        format: "png"
      })}`))
    .setTimestamp();

    return message.channel.send(Embed);
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