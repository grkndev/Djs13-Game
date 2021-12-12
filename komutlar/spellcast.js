module.exports = {
    description: 'Spellcast Game',
    run: async (client, interaction) => {
        if(interaction.member.voice)
        {
    client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'spellcast').then(async invite => {
        return interaction.reply(`${invite.code}`);
    });
}else{return interaction.reply({content:'Sesli kanalda olmalısın',ephemeral:true});}
}
};