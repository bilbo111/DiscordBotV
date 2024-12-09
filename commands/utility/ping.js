const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  category: "utility",
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong! and the bot's ping"),
  async execute(interaction) {
    // Вычисление задержки (пинга)
    const ping = Date.now() - interaction.createdTimestamp;

    // Ответ с задержкой
    await interaction.reply(`Понг! Задержка: ${ping} мс`);
  },
};
