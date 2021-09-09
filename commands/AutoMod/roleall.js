const db = require("quick.db");
const Discord = require("discord.js")
const colors = require('./../../colors.json')
module.exports = {
  name: "role-all",
  aliases: ["ra", "all-role"],
  run: async (client, message, args) => {
     if (message.member.hasPermission("MANAGE_SERVER")) {

    
    var role1 = message.mentions.roles.first().id;
    if(!role1)
    {
      var role1 = args[0];
    }

    let role2 = message.guild.roles.cache.get(`${role1}`);
message.guild.members.cache.forEach(member => member.roles.add(role2))
message.reply("Done It will be running in background")

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