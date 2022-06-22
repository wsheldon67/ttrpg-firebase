<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Refresh'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Apply water to reinvigorate and close wounds on a willing target.</em></p>
  <p>Mark 1 <Tip text='fatigue'/> to heal an ally in reach who used <Tip text='evade and observe'/>:</p>
  <ul>
    <li>Clear an appropriate <Tip text='status'/></li>
    <li>Clear 3 fatigue or 2 <Tip text='conditions'/></li>
  </ul>
</Header>