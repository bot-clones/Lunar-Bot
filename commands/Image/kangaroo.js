const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config');
const colors = require('./../../colors.json')

module.exports = {
    name: "kangaroo",
    description: "Sends a random Kangaroo image !!",
    usage: `${config.PREFIX}kangaroo`,
    run: async (bot, message, args) => {

    const res = await fetch('https://some-random-api.ml/img/kangaroo');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`🦘 Kangaroo 🦘`)
    .setImage(img)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(colors.uptime);
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