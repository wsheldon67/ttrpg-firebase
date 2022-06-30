<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Plant Trap">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Place a snare or triggered explosive into your environment.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
  </ul>
  <p>The next enemy who enters the trapped area must mark a <Tip text='condition'/> and <Tip text='shift their balance'/> away from center.</p>
</Header>