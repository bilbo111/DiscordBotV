const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  category: "utility",
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),
  async execute(interaction) {
    await interaction.reply(
      `Эта команда была запущена ${interaction.user.username}, он присоединился на сервер ${interaction.member.joinedAt}.`,
    );
  },
};
