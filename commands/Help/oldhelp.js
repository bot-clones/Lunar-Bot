const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["hp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:verified_developer:867324410025607188> Here are my commands")
      .setDescription("<a:YellowArrow:852088036422057985> ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "<a:EMP_KING:867324413267542026> **ADMIN**",
        "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock`"
      )
      .addField(
        "<:ChatBot:881128707153100800> **CHATBOT**",
        "`chatbot-disable` `chatbot-set`"
      )
      .addField(
        "<:fun:866155255321853982> **FUN**",
        "`deepfry` `coinflip` `corona` `drake` `eightball` `flipcoin` `google` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`"
      )
      .addField(
        "<:general:866155253861580811> **GENERAL**",
        "`servericon` `akinator` `ascii` `avatar` `base64` `battleship` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `rps` `support` `trivia` `weather`"
      )
      .addField(
        "<a:TadaBig:870535786376859650> **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "<:avatar:866155256827084851> **IMAGE**",
        "`3000years` `affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet`"
      )
      .addField(
        "<:channels:866155257687048192> **INFO**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`"
      )
      .addField(
        "<:mod:881039443354591263> **MODERATION**",
        "`purge` `resetwarns` `Userid` `lockchannel` `mute` `purge` `say` `setchat` `slowmode` `unlockchannel` `unmute` `warn` `warnings` `Userinfo`"
      )
      .addField(
        "<:mod:881039443354591263> **AUTOMODERATION**",
        "`anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
      )
      .addField(
        "<:mod:881039443354591263> **AURA**",
        "`addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`"
      )
      .addField(
        "<:warn:866155255133896721> **NSFW**",
        "`4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`"
      )
      .addField(
        "<a:EMP_KING:867324413267542026> **OWNER**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "<:ticket1:881128707065016320> **TICKET**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`"
      )
      .addField(
        "<:roles:866155257716932618> **ULTILITY**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "<:UPLogo:880786952205529169> **UPTIMER**",
        "`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Amiruman Gaming#0487 | Prefix: &")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discordapp.com/oauth2/authorize?client_id=880805763432452188&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/Az4EcFsVES");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Subscribe') 
      .setURL("https://www.youtube.com/channel/UC2NA_VWzo_I5XheMROy6HTg");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};
