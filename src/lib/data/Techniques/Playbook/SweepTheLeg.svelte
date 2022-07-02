<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Sweep the Leg'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>You attack where an enemy is weakest or most off-balance.</em></p>
  <p>If your foe has 3 or more <Tip text='conditions'/> and <Tip text='fatigue'/> marked:</p>
  <ul><li>Inflict 2 fatigue</li></ul>
  <p>If your foe has fewer than 3 conditions and fatigue marked:</p>
  <ul>
    <li>Mark 1 fatigue</li>
    <li>Inflict 2 fatigue</li>
  </ul>
</Header>