<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Dust Stepping">
  <div slot='header' class='buttons'>
    {#if character}
      <Status bind:character={character} status='Favored'/>
      <Status bind:character={character} status='Prepared'/>
    {/if}
    <slot />
  </div>
  <p><em>Step up into the air on thin pillars of dust and stone.</em></p>
  <ul>
    <li>Advance to a higher position</li>
    <li>Become <Tip text='favored'/> and <Tip text='prepared'/></li>
  </ul>
  <p>Any foe engaged with you can mark 2 <Tip text='fatigue'/> to block this effect.</p>
</Header>