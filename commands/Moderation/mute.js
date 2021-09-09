const {
  Message,
  MessageEmbed
} = require('discord.js')
const colors = require('./../../colors.json')
const ms = require('ms')

module.exports = {
  name: 'mute',
  usage: '<name of member>',
  description: 'Mutes a member',
  /**
  * @param {Message} message
  */
  run: async(client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<a:no:865963806483808256> You do not have permissions to use this command')
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!Member) return message.channel.send('Member is not found.')
    const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    if (!role) {
      try {
        message.channel.send('<a:no:865963806483808256> Muted role is not found, attempting to create muted role.')

        let muterole = await message.guild.roles.create({
          data: {
            name: 'muted',
            permissions: []
          }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
          await channel.createOverwrite(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          })
        });
        message.channel.send('<a:yes:865963544380964864> Muted role has sucessfully been created.')
      } catch (error) {
        console.log(error)
      }
    };
    let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
    if (Member.roles.cache.has(role2.id)) return message.channel.send(`<a:no:865963806483808256> ${Member.displayName} has already been muted.`)
    await Member.roles.add(role2)
    message.channel.send(`<a:yes:865963544380964864> ${Member.displayName} is now muted.`)
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