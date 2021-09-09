const db = require("quick.db")
const colors = require('./../../colors.json')

module.exports = {
        name: "auditlog",
        aliases: ['setm', 'sm', 'smc', 'setmodlog'],
        usage: "[channel mention | channel ID | channel name]",
        description: "Sets A Channel Where The Bot Can Send Moderation Logs!",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**<a:no:865963806483808256> You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**<a:yes:865963544380964864> Modlog Channel Set In This Server Is \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**<a:no:865963806483808256> Please Enter A Channel Name or ID To Set!**"
        );
    }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**<a:no:865963806483808256> Please Enter A Valid Text Channel!**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**<a:no:865963806483808256> This Channel is Already Set As Modlog Channel!**")
            } else {
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**<a:yes:865963544380964864> Modlog Channel Set!**")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**<a:yes:865963544380964864> Modlog Channel Has Been Set Successfully in \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**<a:no:865963806483808256> Error - `Missing Permissions Or Channel Is Not A Text Channel!`**");
        }
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