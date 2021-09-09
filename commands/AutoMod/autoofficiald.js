const db = require("quick.db");
const Discord = require("discord.js");
const colors = require('./../../colors.json')
module.exports = {
  name: "auto-official-role-disable",
  aliases: ["auto-official-disable", "auto-name-role-disable","anr-disable", "af-disable", "autoofficial-disable"],
  run: async (client, message, args) => {
    if (message.member.hasPermission("MANAGE_SERVER")) {
db.delete(`tagg_${message.guild.id}`);
db.delete(`tagn_${message.guild.id}`);
return message.reply("Done Deleted Official role and tag from my database");
  }
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