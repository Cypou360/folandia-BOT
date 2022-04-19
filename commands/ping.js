const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with your latency.'),
	async execute(interaction) {
		await interaction.reply(`Your latency is : ${Date.now() - MessageEvent.createdTimeStamp} ms.`);
	},
};