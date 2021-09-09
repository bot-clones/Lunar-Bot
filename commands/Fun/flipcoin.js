const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "flipcoin",
  aliases: ["coinflip"],
  run: async(client, message, args) => {
  
  
function doanswer() {
    var answers = ["Heads", "Tails"]
    return answers[Math.floor(Math.random()*answers.length)];
}

  await message.channel.send({embed: {
        color: 3447003,
        description: "I'm get: " + doanswer(),
    }});
	
	
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