// const fs = require("node:fs");
// const path = require("node:path");
const { Client, Intents, Collection } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

// client.commands = new Collection();
// const commandsPath = path.join(__dirname, "commands");
// const commandFiles = fs
//   .readdirSync(commandsPath)
//   .filter((file) => file.endsWith(".js"));

// for (const file of commandFiles) {
//   const filePath = path.join(commandsPath, file);
//   const command = require(filePath);
//   // Set a new item in the Collection
//   // With the key as the command name and the value as the exported module
//   client.commands.set(command.data.name, command);
// }

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
  } else if (commandName === 'sigma') {
    await interaction.reply("1. Pal weed \n2. Nie wciagaj krysztalu z Torunia \n4. Nie mieszaj alko z mewa \n5. Nie wal z dychy")
  } else if (commandName === 'essa') {
    const rand = Math.floor(Math.random() * 11 + 1);
    console.log(rand)
    await interaction.reply({files: [`./images/test11.jpg`]})
  }
}); 

// Login to Discord with your client's token
client.login(token);
