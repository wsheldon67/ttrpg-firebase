<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte'
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'

  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Pin A Fly To A Tree">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
      <Fatigue bind:character={character} amt={3} />
    {/if}
    <slot />
  </div>
  <p><em>Fire arrows with perfect accuracy to pin a foe in place.</em></p>
  <p>Mark 1 or 3 <Tip text='fatigue'/>:</p>
  <table>
    <tr>
      <th>1 Fatigue</th>
      <th>3 Fatigue</th>
    </tr>
    <tr>
      <td>Inflict <Tip text='impaired'/></td>
      <td>Inflict impaired and <Tip text='trapped'/></td>
    </tr>
  </table>
</Header>