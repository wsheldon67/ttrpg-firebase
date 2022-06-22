<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte';
  import Header from '$lib/c/Header.svelte'
  import Status from '$lib/c/Status.svelte';
  import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character';
  import type { NPC } from '$lib/data/npc'

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data|NPC = undefined
</script>
<Header h={1} {start} {hide} title='Duck and Twist'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p>Rely on your fast movement to help keep you out of the worst of harm's way.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Clear 1 <Tip text='condition'/></li>
    <li>Become <Tip text='favored'/></li>
  </ul>
</Header>