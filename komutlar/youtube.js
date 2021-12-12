module.exports = {
    description: 'Youtube Together',
    run: async (client, interaction) => {
      
            if(interaction.member.voice.channel) {
              client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'youtube').then(async invite => {
            return interaction.reply(`${invite.code}`);
        });
    }
        
    else
    {
        return interaction.reply({content:'Sesli kanalda olmalısın',ephemeral:true});
    }
    

}
};