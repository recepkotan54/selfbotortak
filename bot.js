const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('**Biz Büüymekte Olan Bir Discord Sunucusuyuz** https://discord.gg/Ee7hBtV');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN)
