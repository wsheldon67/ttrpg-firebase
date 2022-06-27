<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Air Cushion">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Soften the blows an ally takes and get the back on their feet faster.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
  </ul>
  <p>Clear...</p>
  <ul class='or'>
    <li>2 fatigue</li>
    <li>1 <Tip text='condition'/></li>
    <li>1 <Tip text='status'/></li>
  </ul>
  <p>...from an ally within reach who was struck by an attack this <Tip text='exchange'/>.</p>
</Header>