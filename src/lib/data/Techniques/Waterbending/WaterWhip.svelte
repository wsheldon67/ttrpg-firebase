<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Water Whip'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Lash out with a tendril of water.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict 1 <Tip text='condition'/> or 2 fatigue, your choice.</li>
  </ul>
</Header>