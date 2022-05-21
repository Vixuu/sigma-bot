const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sigma")
    .setDescription("5 krokow do sukcesu"),
  async execute(interaction) {
    await interaction.reply(
      "1. Pal weed \n2. Nie wciagaj krysztalu z Torunia \n4. Nie mieszaj alko z mewa \n5. Nie wal z dychy"
    );
  },
};
