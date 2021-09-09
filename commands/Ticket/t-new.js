const colors = require('./../../colors.json')
module.exports = {
    name: 'tnew',
    aliases: ['open-ticket', 'newtick'],
    description: 'Creates a new ticket.',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("I need the `MANAGE_CHANNELS` permission to use this comamnd");
        if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
            return message.reply('you already have a ticket, please close your exsisting ticket first before opening a new one!');
        }

        message.guild.channels.create(`ticket-${message.author.id}`, {
            permissionOverwrites: [
                {
                    id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
            ],
            type: 'text',
        }).then(async channel => {
            message.reply(`<a:yes:865963544380964864> you have successfully created a ticket! Please click on ${channel} to view your ticket.`);
            channel.send(`Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`${config.prefix}close\``);
            let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)
            if (logchannel) {
                logchannel.send(`Ticket ${message.author.id} created. Click the following to veiw <#${channel.id}>`);
            }
        });

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