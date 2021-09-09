const colors = require('./../../colors.json')
module.exports = {
    name: 'tremove',
    aliases: ['ticketremove'],
    description: 'Removes a member to a specified ticket.',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        if (message.channel.name.includes('ticket-')) {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
            if (!member) {
                return message.channel.send(`Incorrect Usage! Correct Usage:${config.prefix}remove <member>`);
            }
            try {
                message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: false,
                    SEND_MESSAGES: false,
                    ATTACH_FILES: false,
                    READ_MESSAGE_HISTORY: false,
                }).then(() => {
                    message.channel.send(`<a:yes:865963544380964864> Successfully removed ${member} from ${message.channel}`);
                });
            }
            catch (e) {
                return message.channel.send('<a:no:865963806483808256> An error occurred, please try again!');
            }
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