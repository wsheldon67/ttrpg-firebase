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
<Header h={1} {start} {hide} title="Fire Blade">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Swipe your surroundings with a blade of flame.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Slice through a piece of your surroundings and destabilize your foe's footing</li>
    <li>Inflict 2 fatigue and <Tip text='impaired'/> on them</li>
  </ul>
</Header>