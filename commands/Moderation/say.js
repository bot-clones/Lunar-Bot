const db = require("old-wio.db");
const colors = require('./../../colors.json')

const { MessageEmbed } = require("discord.js");

const Discord = require("discord.js");

var pattern = new RegExp(
  "^(https?:\\/\\/)?" +
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
    "((\\d{1,3}\\.){3}\\d{1,3}))" +
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
    "(\\?[;&a-z\\d%_.~+=-]*)?" +
    "(\\#[-a-z\\d_]*)?$",
  "i"
);

module.exports = {
    name: "say",
    aliases: ["broadcast"],
    description: "Says your input via the bot",
    usage: "say <input>",
    run: async (bot, message, args) => {
    //Start

    message.delete();

    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`<a:no:865963806483808256> Please Give Me Something To Say!`);

    function UrlCheck(str) {
      return pattern.test(str);
    }

    if (UrlCheck(Content) === true) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(
          `<a:no:865963806483808256> Links Is Not Allowed | Only Administrators Can Use Links!`
        );
      }
    }

    return message.channel.send(Content);

    //End
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