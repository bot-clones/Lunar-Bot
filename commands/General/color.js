
const pop = require("popcat-wrapper")
const { MessageEmbed } = require("discord.js")
const colors = require('./../../colors.json')
module.exports ={ 
  name: "color",

  async run (client, message, args) {
    let color = args[0]
    if(!color) return message.channel.send('Please provide a hex code!')
    if(color.includes("#")) {
      color = color.split("#")[1]
    }
    try {
    const info = await pop.colorinfo(color)
    
      const embed = new MessageEmbed()
      .setTitle("Color Info")
      .addField('Name', info.name, true)
      .addField('Hex', info.hex, true)
      .addField('RGB', info.rgb, true)
      .addField('Brighter Shade', info.brightened, true)
      .setImage(info.color_image)
      .setColor(colors.uptime)
      message.channel.send(embed)
    } catch (error) {
      return message.channel.send("Invalid Color!")
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