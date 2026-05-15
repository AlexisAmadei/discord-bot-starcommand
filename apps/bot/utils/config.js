const fs = require('node:fs');
const path = require('node:path');

function loadFileConfig() {
    const filePath = path.join(__dirname, '..', 'config.json');
    if (!fs.existsSync(filePath)) return {};
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.error('Failed to parse config.json:', err);
        return {};
    }
}

const file = loadFileConfig();

const config = {
    token: (process.env.DISCORD_TOKEN || file.token || '').trim(),
    clientId: process.env.DISCORD_CLIENT_ID || file.clientId || '',
    appID: process.env.DISCORD_APP_ID || file.appID || '',
    PUBLIC_KEY: process.env.DISCORD_PUBLIC_KEY || file.PUBLIC_KEY || '',
    guildId: process.env.DISCORD_GUILD_ID || file.guildId || '',
    clientSecret: process.env.DISCORD_CLIENT_SECRET || file.clientSecret || '',
};

if (!config.token) {
    console.error('Missing Discord token. Set DISCORD_TOKEN env var or provide token in config.json.');
}

module.exports = config;
