const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "help2",
   aliases: ["hp2"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Page Home\n"+ client.user.username + " | Made by: Amiruman Gaming", client.user.displayAvatarURL())
        .setImage(`https://cdn.discordapp.com/attachments/820950216249180170/881037152576737320/standard.gif`)
        .addField("<:category:866155255174660146> **__My Features__**",
`>>> One of the best <:bughunter:866155261017063424> **all-in-one** Discord Bot! Moderation, Info, Utility, **Ticket**, and also a new awesome <:UPLogo:880786952205529169> __**Uptimer+**__ System!
<:up1:866155257583501342> Many **Nsfw** and <:fun:866155255321853982> **Fun** Commands (50+)
<:crowne:866155257225674752> **Admin** and **Auto-Moderation** and way much more!
<:stats:866155255603265556> **\`${Math.floor(client.ws.ping)}ms\` Ping**`)
        .addField("<:UPLogo:880786952205529169> **__Uptimer+__**",">>> Uptimer Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online __24/7__ Just By Using A **Single** Command.\n__Uptimer+ Commands__ <:__:866155255644291083>\n`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`",)
        .addField("<:UPLogo:880786952205529169> __How to use:__",">>> __Add the bot__ to your discord server\n Type `!howtouse` and get information <:setting:874348670382911578>")
        .setColor(colors.uptime);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('<a:version:867324402151718932> Admin  & Moderation <:mod:881039443354591263>')
        .addField("ㅤ⠀⠀⠀ \n <a:version:867324402151718932> **Admin** | <a:yes:865963544380964864> **ENABLED**",
          "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock` \n\n<:mod:881039443354591263> **Moderation** | <a:yes:865963544380964864> **ENABLED** \n `purge` `resetwarns` `Userid` `lockchannel` `mute` `purge` `say` `setchat` `slowmode` `unlockchannel` `unmute` `warn` `warnings` `Userinfo` \n\n<:mod:881039443354591263> **AutoModeration** | <a:yes:865963544380964864> **ENABLED** \n `anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
        )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed2 = new Discord.MessageEmbed()
      .setTitle('<:help:866155256857624598> Info , Aura & General <:general:866155253861580811>')
      .addField("⠀⠀⠀ \n <:help:866155256857624598> **Info** | <a:yes:865963544380964864> **ENABLED**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`\n\n<:roles:866155257716932618> **Aura** | <a:yes:865963544380964864> **ENABLED**\n `addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`\n\n<:general:866155253861580811> **General** | <a:yes:865963544380964864> **ENABLED** \n `servericon` `akinator` `ascii` `avatar` `base64` `battleship` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `rps` `support` `trivia` `weather`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('<:fun:866155255321853982> Fun , Images & Nsfw  <:warn:866155255133896721>')
      .addField("ㅤ⠀⠀⠀ \n <:fun:866155255321853982> **Fun** | <a:yes:865963544380964864> **ENABLED**","`deepfry` `coinflip` `corona` `drake` `eightball` `flipcoin` `google` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`\n\n <:avatar:866155256827084851> **Image** | <a:yes:865963544380964864> **ENABLED** \n`3000years` `affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet` \n\n <:warn:866155255133896721> **Nsfw** | <a:yes:865963544380964864> **ENABLED** \n `4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`",)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

       const embed4 = new Discord.MessageEmbed()
      .setTitle('<:crowne:866155257225674752> Owner , ChatBot & Ultility <:bal:874348683272007741>')
      .addField("ㅤ⠀⠀⠀ \n <:crowne:866155257225674752> **Owner** | <a:yes:865963544380964864> **ENABLED**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`\n\n <:ChatBot:881128707153100800> ChatBot | <a:yes:865963544380964864> **ENABLED** \n`chatbot-disable` `chatbot-set` \n\n<:bal:874348683272007741> **Ultility** | <a:yes:865963544380964864> **ENABLED** \n`advice` `announce` `binary` `members` `membercount` `minecraft` `poll` `prefix` `rank` `serverinfo` `shortener` `whatsapp` `worldclock` `yt`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);


       const embed5 = new Discord.MessageEmbed()
      .setTitle(`<:ticket1:881128707065016320> Ticket , Giveaways & Uptimer <:UPLogo:880786952205529169>`)
      .addField("ㅤ⠀⠀⠀ \n <:ticket1:881128707065016320> **Ticket** | <a:yes:865963544380964864> **ENABLED**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`\n\n<a:TadaBig:870535786376859650> **Giveaways** | <a:yes:865963544380964864> **ENABLED** \n`start [channel] [time] [winner] [prize]`, `end [giveaway id]` , `recoll [giveaway id]` \n\n<:UPLogo:880786952205529169> **Uptimer ** | <a:yes:865963544380964864> **ENABLED** \n `add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`")
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(colors.uptime);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Admin , Auto/Moderation')
        .setEmoji('880786952205529169')
        .setValue('option1')
        .setDescription('Admin , Auto/Moderation')

        let option2 = new MessageMenuOption()
        .setLabel('Info , General & Aura')
        .setEmoji('880786952205529169')
        .setValue('option2')
        .setDescription('Info , General & Aura')

        let option3 = new MessageMenuOption()
        .setLabel('Fun , Image & Nsfw')
        .setEmoji('880786952205529169')
        .setValue('option3')
        .setDescription('Fun , Image & Nsfw')

        let option4 = new MessageMenuOption()
        .setLabel('Owner , ChatBot & Ultility')
        .setEmoji('880786952205529169')
        .setValue('option4')
        .setDescription('Owner , ChatBot & Ultility')

        let option5 = new MessageMenuOption()
        .setLabel('Ticket , Giveaways  & Uptimer')
        .setEmoji('880786952205529169')
        .setValue('option5')
        .setDescription('Ticket , Giveaways  & Uptimer')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 100000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }

        if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
        }

        if(b.values[0] == "option6") {
            Sendmenu.edit(embed6, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("<a:no:865963806483808256> This help menu is expired! Please retype the command to view again.")
    })

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