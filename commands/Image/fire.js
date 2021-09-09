const Discord = require('discord.js');
const config = require('../../config.json');
const Amebot = require('amethyste-api');
const colors = require('./../../colors.json')
const AmeAPI = new Amebot(config.AME_API);

module.exports = {
        name: 'fire',
        description: 'Editing image and send fire one!',
        aliases: [""],
        usage: '',
    run: async (bot, message, args) => {
    
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("fire", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "fire.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);

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