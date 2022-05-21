const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Attaches random sigma meme #sigmagrindset"),
  // async execute(interaction) {
  //   await interaction.reply('');
  // },
};
