<script lang="ts">
    import { BUTTONS } from "$lib";
    import Button8831 from "$lib/components/Button8831.svelte";
    import stitch_lol from "$lib/img/stitch_lol.gif";
</script>

<h1 class="bb cnt nfw brd">Buttons</h1>
<h2 class="ub wht cnt">My buttons!</h2>
<p class="cnt">
    <img
        src="/img/buttons/stitch.png"
        title="Primary Button"
        alt="liloandstit.ch 88 by 31 button with Stitch and Angel on it, and with palm trees to the sides."
    />
    <img
        src="/img/buttons/stitch-alt.png"
        title="Alternate Button"
        alt="liloandstit.ch 88 by 31 button with palm trees to the sides."
    />
    <img
        src="/img/buttons/lilo-and-stitch.gif"
        title="The Entire Movie"
        alt="an 88x31 button of the entirety of lilo and stitch"
    />
</p>
<h1 class="bb cnt nfw brd">Other buttons</h1>
<h2 class="ub wht cnt">Mostly friends, other interests, or anything really!</h2>

<div class="cnt buttons">
    {#each BUTTONS as { href, alt, src, title }}
        <Button8831 {href} {alt} {src} {title}></Button8831>
    {/each}
    <iframe
        src="//incr.easrng.net/badge?key=stitch"
        style="background: url(//incr.easrng.net/bg.gif)"
        title="increment badge"
        width="88"
        height="31"
        frameborder="0"
    ></iframe>
</div>

<img src={stitch_lol} alt="Stitch laughing" class="fuckapple" />

<style>
    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-left: auto;
        margin-right: auto;
        max-width: 51.5rem;
    }
</style>
