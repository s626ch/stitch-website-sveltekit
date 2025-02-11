import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            precompress: {
                brotli: true,
                gzip: true,
                files: ["html", "js", "json", "css", "svg", "xml", "wasm", "png", "gif"],
            },
        }),
    },
};

export default config;
