<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character';
  import Fatigue from '$lib/c/Fatigue.svelte';
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
</script>
<Header h={1} {start} {hide} title='Protect'>
  <svelte:fragment slot='header'>
    {#if character}
      <Fatigue bind:character={character}/>
    {/if}
    <slot />
  </svelte:fragment>
  <p>Protect an ally within reach. Mark 1-fatigue to intercept and stop 
    an attack made against them in this exchange; if no attack is made 
    against them in this exchange, you both become Inspired.</p>
</Header>