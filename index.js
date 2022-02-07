require('dotenv').config();

const PORT = 12345;

const centra = require('centra');
const { createHmac } = require('crypto');
const { writeFile } = require('fs').promises;
const floatplane = require('floatplane');


async function getStreams() {
    const videos = await floatplane.creator.blogPosts("GarbageTime", { type: "video" }); 
    console.log(videos)
    const videoFile = File('videos.txt')
    if (videos ==! videoFile) {
        getStreamInfo(videos[1])
    } else {
        const promise = writeFile('videos.txt', videos)
        await promise; 
    }

}

function getStreamInfo() {
    centra(process.env.FLOATPLANE_URI)
        .method('POST')
        .body(process.env.FLOATPLANE_GUID, 'json')
        .header('Auth', process.env.FLOATPLANE_USERNAME)
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

getStreams();



