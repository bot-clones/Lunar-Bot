const Discord = require('discord.js');
const colors = require('./../../colors.json')
const superagent = require('superagent');

module.exports = {
        name: 'hug',
        description: 'Hugs people',
        aliases: ["hug"],
        usage: '<user>',
        accessableby: "",
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/hug");
              const embed = new Discord.MessageEmbed()
             .setColor('#ff4242')
              
          .setDescription(`${victim} is hugged by ${message.author}`)
          .setImage(body.url)
           .setTimestamp()
      
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