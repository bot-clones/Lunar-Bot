const colors = require('./../../colors.json')
module.exports = {
    name: 'topen',
    aliases: ['ticketopen'],
    description: 'Re-opens a ticket.',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (message.channel.name.includes('ticket-')) {
            const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
            try {
                message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    ATTACH_FILES: true,
                    READ_MESSAGE_HISTORY: true,
                })
                    .then(() => {
                        message.channel.send(`<a:yes:865963544380964864> Successfully re-opened ${message.channel}`);
                    });
            }
            catch (e) {
                return message.channel.send('<a:no:865963806483808256> An error occurred, please try again!');
            }
        }
        else {
            return message.reply(
                '<a:no:865963806483808256> you cannot use this command here. Please use this command on a closed ticket.',
            );
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