const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '<@500019474494128139>') {
    msg.reply('يشخ انا نايم ايش فيك؟');
  }
});

client.login('process.env.BOT_TOKEN');
