const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('User info.'),
	async execute(interaction) {
		const profileImage = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png`;
// inside a command, event listener, etc.
	const userEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Information of :')
		.setDescription(interaction.user.username)
		.addFields({ name: 'tag :', value: interaction.user.tag, inline: true },{ name: 'id :', value: interaction.user.id, inline: true },)
		.setImage(profileImage)
		.setTimestamp()
		.setFooter({ text: 'by Folandia'});

		await interaction.reply({ embeds: [userEmbed] });
	},
};