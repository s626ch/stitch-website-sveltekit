import { env } from "$env/dynamic/private";

let cache: any = {};

async function update() {
    const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=1&user=s626ch&api_key=${env.LASTFM_KEY}&format=json`
    );
    const lastfm = await response.json();
    cache = lastfm;
}

setInterval(update, 1000 * 60);

export async function getRecentTracks() {
    if (!cache["recenttracks"]) await update();
    return cache;
}
