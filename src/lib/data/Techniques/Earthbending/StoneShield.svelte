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
<Header h={1} {start} {hide} title="Stone Shield">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Status bind:character={character} status='Impaired' />
    {/if}
    <slot />
  </div>
  <p><em>Raise a defensive shield of stone that protects you or someone else.</em></p>
  <p>Mark 1 <Tip text='fatigue'/> to raise the shield:</p>
  <ul>
    <li>Blocks the first attack toward it each <Tip text='exchange'/></li>
    <li>Cannot move and is not destroyed by attacks</li>
    <li>Anyone protected gains <Tip text='impaired'/>, as it is tough to move around.</li>
  </ul>
  <p>You can use the raw material in the wall to reduce the cost of an earthbending technique by 1 fatigue, removing the shield.</p>
</Header>