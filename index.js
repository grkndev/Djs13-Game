const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({intents:[Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_INVITES,Discord.Intents.FLAGS.GUILD_MEMBERS,Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_PRESENCES,Discord.Intents.FLAGS.GUILD_VOICE_STATES,Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS]});
const synchronizeSlashCommands = require('discord-sync-commands');
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
const {token}=require("./config.json");

client.commands = new Discord.Collection();
fs.readdir("./komutlar/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./komutlar/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, {
            name: commandName,
            ...props
        });
        console.log(`👌 Komut Yüklendi: ${commandName}`);
    });
    synchronizeSlashCommands(client, client.commands.map((c) => ({
        name: c.name,
        description: c.description,
        options: c.options,
        type: 'CHAT_INPUT'
    })), {
        debug: true
    });
});

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event yüklendi: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});



client.login(token);