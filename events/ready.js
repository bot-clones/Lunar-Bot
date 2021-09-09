module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`${client.projectsSize} Lunar Network | Made By Amiruman`, {
    type: "LISTENING",
  });
};
