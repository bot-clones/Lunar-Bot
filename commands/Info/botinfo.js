const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
  name: "botinfo",
    aliases: ['binfo', 'botstats', 'stats', 'info'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor(colors.uptime)
            .setTitle(`Uptimer bot ${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('				**❯ Uptime:**', `${ms(client.uptime)}`, true)
            .addField('				**❯ WebSocket Ping:**', `${client.ws.ping}ms`, true)
            .addField('				**❯ Memory:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('				**❯ Guild Count:**', `${client.guilds.cache.size} guilds`, true)
            .addField(`				**❯ User Count:**`, `${client.users.cache.size} users`, true)
            .addField('				**❯ Commands:**', `${client.commands.size} cmds`,true)
            .addField('				**❯ Node:**', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField('				**❯ Cached Data:**', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
            .addField('				**❯ Discord.js:**', `${discordjsVersion}`, true)
            .setTimestamp()
        );
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