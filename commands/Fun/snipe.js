const Discord = require('discord.js')
const db = require('quick.db')
const colors = require('./../../colors.json')

module.exports = {
    name: 'snipe',
    description: 'Snipe a deleted message',
    usage: 'snipe',
    guildOnly: true,
    run: async (client, message, args) => {
        let msg = await db.get(`msg_${message.channel.id}`)
        if (!msg) {
            return message.channel.send(`There Nothing to snipe`)
        }
        let author = await db.get(`author_${message.channel.id}`)
        let icon = message.guild.iconURL()
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.client.users.cache.get(author).tag, message.client.users.cache.get(author).displayAvatarURL({ dynamic: true}))
            .setDescription(msg)
            .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
            .setColor(colors.uptime)
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