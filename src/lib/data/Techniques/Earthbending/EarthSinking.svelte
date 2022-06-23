<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Earth Sinking">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={2} />
    {/if}
    <slot />
  </div>
  <p><em>Sink a foe into the earth itself.</em></p>
  <ul>
    <li>Mark 2 <Tip text='fatigue'/></li>
    <li>Cause an enemy standing on the ground to become <Tip text='trapped'/> in the earth.</li>
  </ul>
</Header>