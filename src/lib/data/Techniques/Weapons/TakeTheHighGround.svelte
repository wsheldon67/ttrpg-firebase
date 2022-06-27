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
<Header h={1} {start} {hide} title="Take The High Ground">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Move to an advantageous position above your foe.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Become <Tip text='favored'/></li>
    <li>Ignore all fatigue, <Tip text='conditions'/>, and negative <Tip text='statuses'/> inflicted on you by their attacks this <Tip text='exchange'/></li>
  </ul>
</Header>