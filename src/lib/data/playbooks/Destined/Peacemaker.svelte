<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Peacemaker'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
  </div>
  <p>Walk calmly into the middle of a fierce conflict and <Tip text='plead'/> with the fighters to stop.</p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>They care what you think and listen to you.</li>
  </ul>
  <p>On a miss, the conflict burns far hotter than you had imagined, now you're dead in the crosshairs of the angry fighters.</p>
</Header>