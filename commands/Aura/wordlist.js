const Discord = require('discord.js');
const db = require('quick.db');
const colors = require('./../../colors.json')
module.exports = {
  name: 'wordlist',
  cooldown: 5,  
  description: 'See a list of words on the words-list.',
    run: async (client, message) => {
        let guild = message.guild.iconURL();

        let wordlist = new Discord.MessageEmbed().setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`).setColor(colors.uptime).setTitle(`${message.guild.name} AnitWords List <:Punished:867002789413519392>`).setThumbnail(guild)
        let database = db.get(`anitbadwords_${message.guild.id}`);
        if (database && database.length) {
            let array = [];
            database.forEach((m) => {
                array.push(`**Word: ${m.swearword} | Word Author: ${m.author} <a:yes:865963544380964864>**`);
            });

            wordlist.addField('**  **', `**${array.join('\n')}**`);
        }
        return message.channel.send(wordlist);
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