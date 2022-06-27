<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Cannonball">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Rush forward with the might of the wind behind you and crash into a foe.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Target a foe you aren't currently <Tip text='engaged'/> with and rush at them.</li>
    <li>You become engaged with them, disengaging other foes, and inflict a <Tip text='condition'/> on them.</li>
  </ul>
</Header>