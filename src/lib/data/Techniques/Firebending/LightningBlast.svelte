<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'
  
  export let npc:NPC = undefined
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Lightning Blast">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Fatigue bind:character={character} amt={2} />
      <Fatigue bind:character={character} amt={3} />
    {/if}
    <slot />
  </div>
  <p><em>Hurl a bolt of lightning at a target.</em></p>
  <ul>
    <li>Mark up to 3 <Tip text='fatigue'/></li>
    <li>For each fatigue you mark, your target must mark 2</li>
  </ul>
</Header>