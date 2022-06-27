<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Air Swipe">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Prepare to cast an arc of pressurized air to knock away incoming attacks and throw enemies off-balance.</em></p>
  <p>This <Tip text='exchange'/>:</p>
  <table>
    <tr>
      <th>If an enemy attacks you</th>
      <th>If no enemy attacks you</th>
    </tr>
    <tr>
      <td>You may mark 1 <Tip text='fatigue'/> to cast the arc and block or divert the strike.</td>
      <td>You may cast the arc to inflict 2 fatigue on up to 3 enemies.</td>
    </tr>
  </table>
</Header>