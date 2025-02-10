import { env } from "$env/dynamic/private";

export async function lfm() {
    const rsp = fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=1&user=s626ch&api_key=${env.LASTFM_KEY}&format=json`);
    return rsp;
}