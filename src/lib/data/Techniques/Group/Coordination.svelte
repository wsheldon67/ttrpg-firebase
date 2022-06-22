<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
  import Header from '$lib/c/Header.svelte'
  import Status from '$lib/c/Status.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let character:Data|NPC = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Coordination">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Prepared' />
      <Status bind:character={character} status='Favored' />
      <Fatigue bind:character={character} amt={-2} />
    {/if}
    <slot />
  </div>
  <p><em>The group sets itself up to launch a concerted, skilled attack upon its targets next exchange.</em></p>
  <ul>
    <li>Become <Tip text='prepared'/> and <Tip text='favored'/></li>
    <li>Clear 2 <Tip text='fatigue'/> or a <Tip text='condition'/></li>
  </ul>
</Header>