import { getRecentTracks } from "$lib/server/lastfm";

export async function load() {
    return { lastfm: await getRecentTracks() };
}
