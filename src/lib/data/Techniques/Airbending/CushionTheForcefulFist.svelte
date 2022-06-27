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
<Header h={1} {start} {hide} title="Cushion The Forceful Fist">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={2}/>
      <Status bind:character={character} status='Favored' />
    {/if}
    <slot />
  </div>
  <p><em>Put a cushion of twisting air around your body that keeps physical strikes at bay.</em></p>
  <ul>
    <li>Mark 2 <Tip text='fatigue'/></li>
    <li>Become <Tip text='favored'/></li>
    <li>Become immune to hard, physical forceful attacks and blows until the end of the next <Tip text='exchange'/></li>
  </ul>
</Header>