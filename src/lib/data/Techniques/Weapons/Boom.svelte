<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Status from '$lib/c/Status.svelte'
import Tip from '$lib/c/Tip.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Boom">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} amt={2} />
      <Status bind:character={character} status='Prepared' remove />
    {/if}
    <slot />
  </div>
  <p><em>Throw a small prepared explosive into the midst of your foes.</em></p>
  <ul>
    <li>Mark 2 <Tip text='fatigue'/> or clear <Tip text='prepared'/></li>
    <li><Tooltip tip='Incliding allies'>Everyone</Tooltip> in range must choose to either:</li>
    <ul class='or'>
      <li>Mark 3 fatigue to dive away</li>
      <li>Mark a <Tip text='condition'/> and become <Tip text='stunned'/></li>
    </ul>
  </ul>
</Header>