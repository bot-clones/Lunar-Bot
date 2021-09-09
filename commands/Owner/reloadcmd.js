const Discord = require("discord.js")
const { readdirSync } = require("fs");
const { ownerID } = require("../../owner.json");
const colors = require('./../../colors.json')
const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "reload",
        description: "Reload command- Dev Only",
        aliases: ['rmod'],

    run: async (bot, message, args) => {
        if(message.author.id != ownerID) {
          const rembed = new MessageEmbed()
          .setTitle("Error")
          .setDescription("<a:no:865963806483808256> You are not authorized to use this command as it is resticted to the owner only")
          .setColor(colors.uptime)
          .setFooter(message.author.username, bot.user.displayAvatarURL())
          .setTimestamp();
        message.channel.send(rembed).then(m => m.delete({
          timeout: 7500
        })
        );
        } else {
       
        if(!args[0]) return message.channel.send("Please provide a command name!")

        let commandName = args[0].toLowerCase()

        try {
          
          delete require.cache[require.resolve(`./${commandName}.js`)]
          const pull = require(`./${commandName}.js`)
          bot.commands.set(pull.config.name, pull)
          message.channel.send(`Successfully reloaded: \`${commandName}\``)
        }

        catch (e) {
          console.log(e)
          return message.channel.send(`Could not Reload Command: ${commandName} From Moderation Module Because: \n${e}`)
        }

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