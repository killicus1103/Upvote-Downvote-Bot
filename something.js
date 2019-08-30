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
		.catch(() => console.error('Oops! One reaction failed, please try again'));
	} else if (message.content === '!upvotehelp') {
		message.channel.send('`!ping` Pings bot, sends message back \n`!ud (text)`  Adds upvote and downvote reactions \n`!upvotehelp`  Shows this');
	}
});

client.login('NjE2NzY2Nzg1MjMxOTEyOTg0.XWhXgw.OJctNyWBJXpcizy-P6BmF5FrgE0');
