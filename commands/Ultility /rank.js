const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "rank",
  aliases: ["r"],
  run: async (client, message, args)=> {
let user = message.mentions.members.first() || message.author.id;

 let messagefetch = db.fetch(`messages_${message.guild.id}_${user}`)
    let levelfetch = db.fetch(`level_${message.guild.id}_${user}`)

    if(messagefetch == null) messagefetch = '0';
    if(levelfetch == null) levelfetch = '0';

    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author}, You Are Level: \`${levelfetch}\` & Have Sent: \`${messagefetch}\` Messages`)

    message.channel.send(embed)


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