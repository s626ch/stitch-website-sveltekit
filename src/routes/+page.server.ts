import { lfm } from "$lib/server/lastfm";
export async function load() {
    const lfmr = lfm();
    return { lfmr };
}