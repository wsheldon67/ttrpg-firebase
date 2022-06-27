<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Wind Run">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Race at high speeds, dodging attacks and seeking escape.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Disengage from foes</li>
    <li>Slip to a particular point of escape</li>
  </ul>
  <p>If no one re-engages with you or blocks your retreat by the end of the <Tip text='exchange'/>, you escape the scene.</p>
</Header>