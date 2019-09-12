const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
	message.channel.send('i got it, pong i guess');
	} else if (message.content.startsWith(`${prefix}ud`)) {
		const emoji = message.guild.emojis.find(emoji => emoji.name === 'upvote');
		const emojiTwo = message.guild.emojis.find(emoji => emoji.name === '9975_downvote');
		message.react(emoji)
		.then(() => message.react(emojiTwo))
		.catch(() => message.channel.send('Your\'re reaction is bad and you should feel bad'));
	} else if (message.content === '!upvotehelp') {
		message.channel.send('`!ping` Pings bot, sends message back \n`!ud (text)`  Adds upvote and downvote reactions \n`!upvotehelp`  Shows this');
	}
});

client.login(token);
