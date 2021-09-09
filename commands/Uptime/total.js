const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "total",
  description: "Shows all projects",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    UrlsConfig.countDocuments(
      { authorID: message.author.id },
      async function (err, total) {
        const embed = new MessageEmbed()
          .setTitle(`Uptimer Bot Stats`)
          .setColor(colors.uptime)
          .addField("Total Projects: ", client.projectsSize, true)
          .addField("Your Projects: ", total, true);
        return message.channel.send(embed);
      }
    );
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