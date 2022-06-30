<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Better Faster Stronger">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Empowered' />
    {/if}
    <slot />
  </div>
  <p><em>You push your equipment to its limits to move fast and charge up.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Use <Tip text='seize a position'/>, but no foe can block you.</li>
  </ul>
  <p>Mark an additional 1 fatigue to:</p>
  <ul class='or'>
    <li>Gain <Tip text='empowererd'/> for as long as you maintain the new position</li>
    <li>Move to an unsafe, unstable area and make it safe.</li>
  </ul>
</Header>