<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Stream the Water'>
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Push a high-powered stream of water from a significant source.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
    <li>Inflict a <Tip text='condition'/> on a foe within reach of the water source</li>
  </ul>
  <p>They are pinned against something and cannot shift positions or engage foes other than you until they break the stream or you drop it.</p>
  <p>Mark 1 fatigue at the end of each exchange to continue the stream.</p>
</Header>