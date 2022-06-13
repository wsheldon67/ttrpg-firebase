<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Fire Whip">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p>Lash out from a distance. Mark 1 <Tip text='fatigue'/>:</p>
  <ul>
    <li>Target chooses mark 2 fatigue or 1 <Tip text='condition'/>.</li>
    <li>Enemies must mark 1 fatigue to get close enought to attack you this <Tip text='exchange'/>.</li>
  </ul>
</Header>