const { MessageActionRow } = require("discord.js");
const { MessageButton } = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    description: 'Awkword Game',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle(`${client.user.username} Game Bot!`)
        .setDescription(`Bu botu Slash komutlar ile kullanabilirsin!`,true)
        .addField(`\`/awkword\``,`Awkword oyununu oynarsınız.`,true)
        .addField(`\`/betreyal\``,`Betreyal oyununu oynarsınız.`,true)
        .addField(`\`/chess\``,`Chess oyununu oynarsınız.`,true)
        .addField(`\`/doodlecrew\``,`Doodlecrew oyununu oynarsınız.`,true)
        .addField(`\`/fishington\``,`Fishington oyununu oynarsınız.`,true)
        .addField(`\`/lettertile\``,`Lettertile oyununu oynarsınız.`,true)
        .addField(`\`/poker\``,`Poker oyununu oynarsınız.`,true)
        .addField(`\`/puttparty\``,`Puttparty oyununu oynarsınız.`,true)
        .addField(`\`/spellcast\``,`Spellcast oyununu oynarsınız.`,true)
        .addField(`\`/wordsnack\``,`Wordsnack oyununu oynarsınız.`,true)
        .addField(`\`/youtube\``,`Youtube together oyununu oynarsınız.`,true)
        .setThumbnail(client.user.avatarURL({dynamic:true,size:1024}))
        .setColor("BLUE")
        .setFooter(`${interaction.member.user.tag} tarafından isntedi. 💖 Dev.Gweep Creative`,
        interaction.member.user.avatarURL({dynamic:true,size:1024}));

        const buton = new MessageButton()
        .setLabel("Gweep Creative Youtube").setURL("http://gweepcreative.com").setStyle("LINK");

        interaction.reply({embeds:[embed], components:[new MessageActionRow().addComponents(buton)]});
    }
};