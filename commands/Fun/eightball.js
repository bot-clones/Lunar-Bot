const Discord = module.require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "eightball",
  aliases: ["fortune", "eb", "8ball", "8b"],
  run: async(client, message, args) => {
  if (!args.length) return message.channel.send({embed: {
         color: 16734039,
         description: "Thee needeth to asketh f'r a f'rtune"
         }})


  var fortunes = ["Yes.", "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definelty.", "You may rely on it.",
  "As I see it, yes.", "Most likely.", "Outlook good.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", 
  "Better not tell you now...", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", 
  "My sources say no.", "Outlook not so good...", "Very doubtful.",];  
  
  await message.channel.send({embed: {
         color: 3447003,
         description: fortunes[Math.floor(Math.random()*fortunes.length)]
         }})

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