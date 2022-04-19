const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Delete message 1-100.')
        .addNumberOption(option => 
            option.setName('number').setDescription('Number of message you need to delete (1-100)').setRequired(true)),
	async execute(interaction) {
        const number = interaction.options.getNumber('number');
		
        if(number >=1 && number <=100) {
            interaction.channel.bulkDelete(number);
            await interaction.reply(`${number} message deleted`);
        } else {
            await interaction.reply('Please enter a number between 1-100.');
        }
	},
};