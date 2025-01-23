export function load({ fetch }) {
    const lastfm = fetch("https://lfm.snep.lol/getRecentTracks?username=s626ch");

    return { lastfm };
}
