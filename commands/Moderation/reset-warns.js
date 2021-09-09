const db = require("old-wio.db");
const colors = require('./../../colors.json')

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (bot, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("<a:no:865963806483808256> Yopu should have admin perms to use this command")
    }
    
    const user = message.mentions.members.first() 
    
    if(!user) {
    return message.channel.send("<a:no:865963806483808256> Please mention the person whose warning you want to reset")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("<a:no:865963806483808256> Bot are not allowed to have warnings")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("<a:no:865963806483808256> You are not allowed to reset your warnings")
    }
    
    let warnings = await db.fetch(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
    }
    
   await db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
    
  
    
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
