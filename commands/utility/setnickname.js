const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  category: "utility",
  data: new SlashCommandBuilder()
    .setName("setnickname")
    .setDescription("Change the bot's nickname back to its original one")
    .addStringOption((option) =>
      option
        .setName("nickname")
        .setDescription("The nickname to set for the bot")
        .setRequired(true),
    ),
  async execute(interaction) {
    // Получаем оригинальный ник (или новый ник, который вы хотите установить)
    const nickname = interaction.options.getString("nickname");

    try {
      // Проверка на права бота
      if (!interaction.guild.me.permissions.has("MANAGE_NICKNAMES")) {
        return interaction.reply("У бота нет прав для изменения ника!");
      }

      // Меняем ник
      await interaction.guild.me.setNickname(nickname);
      await interaction.reply(`Ник бота был изменен на: ${nickname}`);
    } catch (error) {
      console.error(error);
      await interaction.reply("Произошла ошибка при изменении ника.");
    }
  },
};
