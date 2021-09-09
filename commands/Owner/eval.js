const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client()
const colors = require('./../../colors.json')
module.exports = {
    name: 'eval',
    run: async (client, message, args) => {
        if (message.author.id !== '682981714523586606') return message.channel.send("<a:no:865963806483808256> You do not have permission to use this command!");
        const embed = new MessageEmbed()
            .setTitle('Evaluating...')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('output:')
                .setDescription(await data)
            .setColor(colors.uptime)
            await msg.edit(embed)
            await msg.react('<a:yes:865963544380964864>')
            await msg.react('<a:no:865963806483808256>')
            const filter = (reaction, user) => (reaction.emoji.name === '<a:no:865963806483808256>' || reaction.emoji.name === '<a:yes:865963544380964864>') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '<a:yes:865963544380964864>':
                                msg.reactions.removeAll();
                                break;
                            case '<a:no:865963806483808256>':
                                msg.delete()
                                break;
                        }
                    })
                })
        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle('error')
                .setDescription(e)
                .setColor(colors.uptime)
            return await msg.edit(embed);
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