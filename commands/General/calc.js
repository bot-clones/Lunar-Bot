const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "calc",
  aliases: ["calculate"],
  run: async (client , message , args) => {

       if(message.guild === null)return;


    if(args.length < 1) {
	    return message.channel.send({embed: {
            color: 16734039,
            description: "You must provide a equation to be solved on the calculator! (eg. 9 + 10)"
        }}) 
    }
			
    const question = args.join(' ');

    let answer;
    if(question.indexOf('9 + 10') > -1) {
        answer = '21 (🤣 XD, You found easter-egg)';
    } else {
        try {
            answer = math.eval(question);
        } catch (err) {
          message.channel.send({embed: {
                color: 16734039,
                description: "Invalid math equation: " + `${err}`
            }});
          return;
        }
    }

  const calc = new Discord.MessageEmbed()
              .setTitle("Calculator")
              .setColor(colors.uptime)
              .addField("Question: ", `${question}`)
              .addField("Answer: ", `${answer}`)
          message.channel.send(calc);
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