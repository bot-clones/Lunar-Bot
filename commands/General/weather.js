const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const config = require('../../config');
const weather = require('weather-js');
const colors = require('./../../colors.json')

module.exports = {
        name: 'weather',
        description: 'Shows weather information',
        aliases: ["weather"],
        usage: '<city name>',
    run: async (bot, message, args) => {
    
        if(args.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("<a:no:865963806483808256> Please enter a location!")
            .setColor(colors.uptime)
            .setTimestamp();
                return message.channel.send(errorembed);
        }
        
        weather.find({ search: args.join(" "), degreeType: 'C'}, function(err, result) {
          
        if(result.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("<a:no:865963806483808256> Please enter a vaild location!")
            .setColor(colors.uptime)
            .setTimestamp();
                return message.channel.send(errorembed);
        }
        
          var current = result[0].current;
          var location = result[0].location;
            if (err) {
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("<a:no:865963806483808256> Please enter a vaild location!")
            .setColor(colors.uptime)
            .setTimestamp();
                return message.channel.send(errorembed);
            }
        
            
            let embed = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(colors.uptime)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .setTimestamp();
                message.channel.send(embed);
        });
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