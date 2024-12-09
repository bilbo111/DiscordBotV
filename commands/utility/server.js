const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  category: "utility",
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),
  async execute(interaction) {
    await interaction.reply(
      `Это сервер ${interaction.guild.name} и на нём ${interaction.guild.memberCount} человек.`,
    );
  },
};
