<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Directed Funnel">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Create a spinning funnel of air that can fire objects at high speed.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Each ally in reach can mark 1 fatigue to toss an appropriate small object into the funnel</li>
    <li>Inflict 2 fatigue on a target within reach for each ally who tossed something in.</li>
  </ul>
</Header>