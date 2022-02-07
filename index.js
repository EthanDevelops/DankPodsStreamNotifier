require('dotenv').config();

const PORT = 12345;

const { createHmac } = require('crypto');
const { writeFile } = require('fs').promises;


function getStreams() {
    // do something
}

function getStreamInfo() {
    // hi
}


function dispatchDiscordWebhook(title, avatar_url, username) {
	const message = {
		content: `<@&${process.env.DISCORD_ROLE}> I'm now [live on Floatplane](https://https://www.floatplane.com/channel/GarbageTime)! I will be streaming ${title}.`,
		avatar_url,
		username
	};

	centra(process.env.DISCORD_WEBHOOK)
		.method('POST')
		.body(message, 'json')
		.send();
}



