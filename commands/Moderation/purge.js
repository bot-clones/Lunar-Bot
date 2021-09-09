const { ownerID } = require('../../owner.json') 
const colors = require('./../../colors.json')

module.exports = {
        name: "purge",
        aliases: [],
        description: "Deletes messages from a channel",
        usage: "m/purge [amount of messages]",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a:no:865963806483808256> You Don't Have Sufficient Permissions!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send('**<a:EMP_KING:867324413267542026> Please Supply A Valid Amount To Delete Messages!**');

        if (args[0] > 100)
            return message.channel.send("**<a:EMP_KING:867324413267542026> Please Supply A Number Less Than 100!**");

        if (args[0] < 1)
            return message.channel.send("**<a:EMP_KING:867324413267542026> Please Supply A Number More Than 1!**");

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
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