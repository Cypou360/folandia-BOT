const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('source')
		.setDescription('Show the source code of the bot.'),
	async execute(interaction) {
		await interaction.reply(`The source code of this bot is https://github.com/Cypou360/folandia-BOT`);
	},
};