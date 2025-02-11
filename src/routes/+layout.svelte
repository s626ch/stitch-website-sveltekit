<script lang="ts">
    import { page } from "$app/stores";
    import "../app.css";

    import PALML from "$lib/img/PALML.png";
    import PALMR from "$lib/img/PALMR.png";
    import LNS from "$lib/img/LNS.png";
</script>

<svelte:head>
    <title>liloandstit.ch</title>
    <link rel="icon" type="image/png" href={$page.url.origin + "/favicon.png"} />
    <meta name="title" content={$page.url.host} />
    <meta name="description" content="aloha, i'm Stitch, welcome to my site :D" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={$page.url.origin} />
    <meta property="og:title" content={$page.url.host} />
    <meta property="og:description" content="aloha, i'm Stitch, welcome to my site :D" />
    <meta property="og:image" content={$page.url.origin + "/favicon.png"} />
    <meta name="theme-color" content="#f96ba6" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:url" content={$page.url.origin} />
    <meta property="twitter:title" content={$page.url.host} />
    <meta property="twitter:description" content="aloha, i'm Stitch, welcome to my site :D" />
    <meta property="twitter:image" content={$page.url.origin + "/favicon.png"} />
</svelte:head>

<div class="container">
    <div class="top">
        <div class="bambooTop">
            <div class="stoppie1 stsh"></div>
            <div class="stoppie2 stsh"></div>
            <div class="stoppie3 stsh"></div>
            <div class="stoppie4 stsh"></div>
            <div class="stoppie5 stsh"></div>
        </div>
        <img src={PALML} alt="doodled palm tree" class="palmL" />
        <a href="/" class="headerlink">
            <img src={LNS} alt="liloandstit.ch" class="logo" />
        </a>
        <img src={PALMR} alt="doodled palm tree" class="palmR" />
        <div class="bambooBottom">
            <div class="stoppie1 stsh"></div>
            <div class="stoppie2 stsh"></div>
            <div class="stoppie3 stsh"></div>
            <div class="stoppie4 stsh"></div>
            <div class="stoppie5 stsh"></div>
        </div>
    </div>
    <hr class="inv" />
    <hr class="inv" />
    <div class="links">
        <div class="flw">
            <h1 class="bb lh1 stitch">Links</h1>
        </div>
        <div class="links2">
            <h2 class="lh1txt ub">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="https://tantalog.liloandstit.ch/" target="_blank">Tantalog Dictionary</a>
                <a href="https://bsky.liloandstit.ch/" target="_blank">Bluesky</a>
                <a href="https://github.com/s626ch/" target="_blank">Github</a>
            </h2>
            <h2 class="lh1txt ub">
                <a href="https://twitter.com/s626ch/" target="_blank">Twitter</a>
                <a href="https://twitter.com/sillystitchy/" target="_blank">Fursuit Twitter</a>
                <a href="https://discord.liloandstit.ch/" target="_blank">Discord</a>
                <a href="/buttons">Buttons</a>
                <a href="/more">More</a>
            </h2>
        </div>
    </div>
    <hr class="inv" />
    <div class="content">
        <slot></slot>
    </div>
</div>
