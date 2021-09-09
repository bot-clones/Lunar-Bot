const db = require("quick.db");
const Discord = require("discord.js");
const colors = require('./../../colors.json')
module.exports = {
  name: "autonick",
  aliases: ["auto-nick"],
  run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "You need `MANAGE GUILD` to configure the auto nick settings!"
      );
      return;
}
if(!args[0]){
  return message.reply(" pls enter a nickname like : LGT -username- OP (Username means the joiner username)")
}
    let message1 = args.join(" ");
    if(message1 !== "disable")
{
  db.set(`nickm_${message.guild.id}`, message1);
  message.channel.send(`Done Your Message Has been set n Database`);
}
if(args[0] == "disable" || args[0] == "off")
{
 db.delete(`nickm_${message.guild.id}`);
 return message.reply("done deleted the autonick feature");
}

  }}

/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */