<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  import type { NPC } from '$lib/data/npc'

  export let character:Data|NPC = undefined
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Swarm">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>The group throws itself upon a foe with no heed to its own safety.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict 2 fatigue on a single target</li>
  </ul>
  <p>This technique may be chosen multiple times. Each time it is chosen after the first, it inflicts an additional 1 fatigue.</p>
</Header>