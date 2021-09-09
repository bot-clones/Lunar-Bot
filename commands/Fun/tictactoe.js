const Discord = require("discord.js");
const colors = require('./../../colors.json')
const db = require("quick.db");

            module.exports = {
  name: "tictactoe",
  aliases: ["ttt"],
  run: async (client, message, args) => {
 if(!message.mentions.users.first()) return message.channel.send(`Pls mention someone`)
    var mention = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!mention)
    {
      message.channel.send("You didnt mention anyone to play with you")
      return;
      
    }

    const { tictactoe } = require('easy-games-js')
    const tic = new tictactoe(mention, message)
    tic.init({ PROVIDE_MEMBER: "Please provide a  member", ACCEPT_CHALLENGE: "{user} Do you accept this challange? if yes than type yes in this chat", DOESNT_PLAY: "looks like {user} doesnt wanna play", WICH_SIDE: "**{user}, Which Side Do You Pick? Type \`End\` To End the game!**", GAME_OVER: "Times up!", END: "end", INACTIVITY: "game ended due to inactivity!", WINNER: "Congrats u have won {winner} ", DRAW: "Its a draw"})
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