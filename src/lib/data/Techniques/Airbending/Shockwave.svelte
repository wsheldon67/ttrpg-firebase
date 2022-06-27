<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Shockwave">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={2} />
    {/if}
    <slot />
  </div>
  <p><em>Leap into the air and hurtle back to the ground, sending a massive burst of pressurized air all around you.</em></p>
  <ul>
    <li>Mark 2 <Tip text='fatigue'/></li>
  </ul>
  <p><Tooltip tip='Including allies'>Everyone</Tooltip> in the area:</p>
  <ul>
    <li>Is thrown away</li>
    <li>Disengages</li>
    <li>Becomes <Tip text='stunned'/>, or marks 4 fatigue.</li>
  </ul>
</Header>