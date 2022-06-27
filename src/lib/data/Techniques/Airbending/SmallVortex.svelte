<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Small Vortex">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={3} />
    {/if}
    <slot />
  </div>
  <p><em>Spin a single enemy off the ground on a small vortex.</em></p>
  <ul>
    <li>Mark 3 <Tip text='fatigue'/></li>
    <li>Your target becomes <Tip text='stunned'/> and <Tip text='impaired'/></li>
  </ul>
</Header>