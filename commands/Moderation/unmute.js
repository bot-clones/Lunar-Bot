const {
  Message
} = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: 'unmute',
  usage: "<member id>",
  /**
  * @param {Message} message
  */
  run: async(client, message, args) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<a:no:865963806483808256> You do not have permissions to use this command')

    if (!Member) return message.channel.send('Member not found')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

    await Member.roles.remove(role)

    message.channel.send(`${Member.displayName} is now unmuted`)
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