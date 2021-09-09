const Discord = require('discord.js');
const { Console } = require('console');
const colors = require('./../../colors.json')

module.exports = {
        name: "lock",
        description: "lock channel",
        aliases: [],
    run: async (bot, message, args) => {
        let lockPermErr = new Discord.MessageEmbed()
        .setTitle("**<a:no:865963806483808256> User Permission Error!**")
        .setDescription("**<a:no:865963806483808256> Sorry, you don't have permissions to use this!**")
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send(lockPermErr);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`<a:yes:865963544380964864> Done | Channel Locked!`);
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