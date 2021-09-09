require("http").createServer((req, res) => res.end("Amiruman Gaming")).listen(process.env.PORT || 8080)
require("dotenv").config();
const { Client, Collection } = require("discord.js");
const UrlsConfig = require("./database/models/UrlsConfig");
const fetchProjects = require("./fetchProjects");
const { timeout, disable_fetching } = require("./config.json");
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
const { GiveawaysManager } = require('discord-giveaways');
const readlineSync = require('readline-sync');
const { MessageEmbed } = require('discord.js')
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.

const colors = require('./colors.json')
const { readdirSync } = require('fs');
const DisTube = require('distube')

const button = require('discord-buttons');
const disbut = require("discord-buttons")
const { hangman } = require('reconlx')

const client = new Client({
  disableEveryone: true,
});
require('discord-buttons')(client);
(async () => {
  await require("./database/connect")();

  let pros = await UrlsConfig.find();

  client.commands = new Collection();
  client.aliases = new Collection();
  client.projectsSize = 0;
  client.projects = pros.map((p) => p.projectURL);

  UrlsConfig.countDocuments({}, async (err, total) => {
    client.projectsSize = total;

    ["command", "events"].forEach((handler) => {
      require(`./handlers/${handler}`)(client);
    });

    await client.login(process.env.BOT_TOKEN);

    if (!disable_fetching) fetchProjects(client.projects, client);
  });
})();
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "51ff23",
    reaction: "<a:TadaBig:870535786376859650>"
  }
});

/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */

//create buttons
let firstbutton = new disbut.MessageButton()
  .setLabel("𝕊𝕥𝕖𝕡 𝟙")
  .setStyle("blurple")
  .setID("firstbutton")
let secondbutton = new disbut.MessageButton()
  .setLabel("𝕊𝕥𝕖𝕡 𝟚")
  .setStyle("blurple")
  .setID("secondbutton")
let thirdbutton = new disbut.MessageButton()
  .setLabel("𝕊𝕥𝕖𝕡 𝟛")
  .setStyle("blurple")
  .setID("thirdbutton")
let row1 = new disbut.MessageActionRow()
  .addComponent(firstbutton)
  .addComponent(secondbutton)
  .addComponent(thirdbutton)
const step1 = new MessageEmbed()
  .setColor("cccfff")
  .setTitle("<a:YellowArrow:870193892492980236> How to Use Uptimer!")
  .addField(
    "<:857122481088495629:873454677231034368> Get the link", "Our first step is to get the webpage link. You can find the code in the bottom or side of you repl.it(see screenshot below)! If you do not have this link, copy paste this code at the top of your `index.js` and run it again.\n ```https://pastebin.com/HJGhAUZf```"
  )
  .setImage("https://media.discordapp.net/attachments/870077234780725281/873324807444365413/Screen_Shot_2021-08-06_at_2.57.52_PM.png?width=1017&height=534")
const step3 = new MessageEmbed()
  .setColor("cccfff")
  .setTitle("<a:YellowArrow:870193892492980236> How to Use Uptimer!")
  .addField(
    "<:5286_three_emj_png:873453086981636127> Other Commands", "Now that we have added your project, you can use other command such as `projects` `remove` `stats` and `total`. Below Is an image of the remove command!  "
  )
  .setImage("https://media.discordapp.net/attachments/870077234780725281/873663248510107688/Screen_Shot_2021-08-07_at_1.25.22_PM.png")
const step2 = new MessageEmbed()
  .setColor("cccfff")
  .setTitle("<a:YellowArrow:870193892492980236> How to Use Uptimer!")
  .addField(
    "<:4751_two_emj_png:873364919259627551> Run the command", "Our next step is to runn the command. The syntax of this command is `*add <repl_url>`. If done correcty the bot should give embed saying: ```:white_check_mark: Added Succesfully!``` See Screenshot Below For More details."
  )
  .setImage("https://media.discordapp.net/attachments/870077234780725281/873366580522782820/Screen_Shot_2021-08-06_at_5.46.41_PM.png");
// Button Handler
client.on("clickButton", async (button) => {
  if (button.id === "firstbutton") {
    button.message.edit({
      embed: step1,
      component: row1,
    });
  } else if (button.id === "secondbutton") {

    button.message.edit({
      embed: step2,
      component: row1,
    });
  } else if (button.id === "thirdbutton") {
    button.message.edit({
      embed: step3,
      component: row1,
    });

  }
})
// pinging
setInterval(async () => {
  UrlsConfig.countDocuments({}, (err, total) => {
    client.projectsSize = total;
    client.user.setActivity(`${total} SERVERS | &help`, {
      type: "WATCHING",
    });
  });



  if (!disable_fetching) fetchProjects(client.projects, client);
}, timeout);
