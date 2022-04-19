const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Server info.'),
	async execute(interaction) {
		const serverImage = `https://cdn.discordapp.com/icons/${interaction.guild.id}/${interaction.guild.icon_hash}.png`;

		const serverEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Information of :')
		.setDescription(interaction.guild.name)
		.addFields({ name: 'Total number :', value: interaction.guild.memberCount, inline: true },{ name: 'id :', value: interaction.guild.id, inline: true },)
		.setImage(serverImage)
		.setTimestamp()
		.setFooter({ text: 'by Folandia'});

		await interaction.reply({ embeds: [serverEmbed] });
		console.log(serverImage);
	},
};