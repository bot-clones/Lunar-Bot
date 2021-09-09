const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const colors = require('./../../colors.json')


module.exports = {
  name: "howtouse",
   aliases: ["howtouse"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setFooter("Page Home\n"+ client.user.username + " | Made by: RogmitOp", client.user.displayAvatarURL())
        .setImage(`https://media.discordapp.net/attachments/820950216249180170/881057229078421505/Untitled.png?width=1214&height=683`)
        .setColor(colors.uptime);

        const embed1 = new Discord.MessageEmbed()
        .setTitle('<:UPLogo:880786952205529169> How to Use Uptimer!')
        .addField("<:up1:866155257583501342> **Get the link**",
          "Our first step is to get the webpage link. You can find the code in the bottom or side of you repl.it(see screenshot below)! If you do not have this link, copy paste this code at the top of your `index.js` and run it again. \n ```https://pastebin.com/HJGhAUZf```"
        )
        .setImage(`https://images-ext-2.discordapp.net/external/VEUaWiaOlFDUoyOQZsT4LrOFkvnGGnCFvCZUpPNlGBA/%3Fwidth%3D1017%26height%3D534/https/media.discordapp.net/attachments/870077234780725281/873324807444365413/Screen_Shot_2021-08-06_at_2.57.52_PM.png?width=681&height=358`)
      .setColor(colors.uptime);

        const embed2 = new Discord.MessageEmbed()
      .setTitle('<:UPLogo:880786952205529169> How to Use Uptimer!n')
      .addField("<:up1:866155257583501342> **Run the command**",
        "Our next step is to runn the command. The syntax of this command is `*add <repl_url>.` If done correcty the bot should give embed saying: \n ```Added Succesfully```"
      )
      .setImage(`https://images-ext-1.discordapp.net/external/pORWifuygzks1a_RYTURYatptD469qGA3PT8X0kefh8/https/media.discordapp.net/attachments/870077234780725281/873366580522782820/Screen_Shot_2021-08-06_at_5.46.41_PM.png?width=570&height=165`)
      .setColor(colors.uptime);

        const embed3 = new Discord.MessageEmbed()
      .setTitle('<:UPLogo:880786952205529169> How to Use Uptimer!n')
      .addField("ㅤ<:up1:866155257583501342> **Other Commands**","Now that we have added your project, you can use other command such as `projects` `remove` `stats` and `total`. Below Is an image of the remove command")
      .setImage(`https://media.discordapp.net/attachments/875796343338172447/875976584715182100/Screen_Shot_2021-08-13_at_10.37.50_PM.png?width=679&height=164`)
      .setColor(colors.uptime);

        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('Step 1')
        .setEmoji('880786952205529169')
        .setValue('option1')

        let option2 = new MessageMenuOption()
        .setLabel('Step 2')
        .setEmoji('880786952205529169')
        .setValue('option2')

        let option3 = new MessageMenuOption()
        .setLabel('Step 3')
        .setEmoji('880786952205529169')
        .setValue('option3')
        
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Click here to view the help menu!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

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