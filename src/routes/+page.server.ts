import { getRecentTracks } from "#lib/server/lastfm.ts";

export async function load() {
    return { lastfm: await getRecentTracks() };
}
