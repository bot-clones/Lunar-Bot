const math = require('discord-math');
const colors = require('./../../colors.json')
module.exports = {
  name: "calculator",
  aliases: ["calc"],
  usage: "calculator",
  description: "math",
  run: async (client, message, args) => {
  
  let num1 = Number(args[0]);
            let operation = args[1];
            let num2 = Number(args[2]);
            
            if (!num1) return message.channel.send('Num1 needs to be specified!');
            if (!operation) return message.channel.send('An operation was not specified!');
            if (!num2) return message.channel.send('Num2 needs to be specified!');
 
            message.channel.send(`Answer: ${math.calculate(num1, operation, num2)}`);
  
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