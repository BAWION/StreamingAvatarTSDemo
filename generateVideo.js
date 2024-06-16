const HeyGen = require('@heygen/streaming-avatar');
const fs = require('fs');

const apiKey = process.env.HEYGEN_API_KEY;
const avatarId = 'your_avatar_id';  // замените на ваш avatar_id

async function generateVideo(text) {
    const client = new HeyGen(apiKey);
    const video = await client.generateVideo({
        text: text,
        avatar_id: avatarId,
        language: 'en-US'
    });

    if (video && video.url) {
        console.log('Video URL:', video.url);
        fs.writeFileSync('video_url.txt', video.url);
    } else {
        console.error('Error generating video:', video);
        fs.writeFileSync('video_url.txt', '');
    }
}

const text = process.argv[2]; // Получение текста предсказания из аргументов командной строки
generateVideo(text);
