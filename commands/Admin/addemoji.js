const {Client, Message, Util} = require("discord.js")
const colors = require('./../../colors.json')

module.exports = {
  name: "steal",
  aliases: ["addemoji"],
  usage: "steal emoji",
  description: "steals an emoji",
  run: async (client, message, args) => {
    if(!args.length) return message.reply('<a:no:865963806483808256> Please Specify Some Emojis!');
    
    for (const rawEmoji of args){
      const parsedEmoji = Util.parseEmoji(rawEmoji);

      if(parsedEmoji.id){
        const extension = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
        message.guild.emojis.create(url, parsedEmoji.name)
          .then((emoji) => message.channel.send(`Added: \`${emoji.url}\`` ));
      }
    }
  },
};

/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */