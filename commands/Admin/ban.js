const math = require('discord-math');
const colors = require('./../../colors.json')

module.exports = {
  name: "ban",
  aliases: ["b"],
  usage: "ban",
  description: "bans member",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.ban();
          message.channel.send(`${tag}> , <a:yes:865963544380964864> <@${memberTarget.user.id}> has been banned!`);

      }else {
        message.channel.send(`${tag}> <a:no:865963806483808256> Please Specify a valid user to ban!`);
      }
    }else {
      message.channel.send(`${tag}> <a:no:865963806483808256> You do not have permissions needed to use this command!`);
    }
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