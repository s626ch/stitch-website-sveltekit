<script lang="ts">
    import { onMount } from "svelte";

    export let href: string | undefined;
    export let title: string | undefined;
    export let alt: string;
    export let src: Promise<typeof import("*.png")> | { default: string };
    let loaded: string | false = false;

    if (!title && href) title = new URL(href).host.replaceAll("percocet.monster", "percocet.monster 💙");

    onMount(async () => {
        if (src) {
            const url = (await src).default;
            const preload = new Image();
            preload.src = url;
            preload.onload = () => (loaded = url);
        }
    });
</script>

<a {href} target="_blank" class="eightyeightthirtyone">
    {#if loaded}
        <img src={loaded} {alt} {title} />
    {/if}
</a>

<style>
    .eightyeightthirtyone {
        width: 88px;
        height: 31px;
        padding: 2.5px;
    }
</style>
