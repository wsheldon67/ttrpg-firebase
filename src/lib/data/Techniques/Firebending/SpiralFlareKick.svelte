<script lang='ts'>
  import Fatigue from '$lib/c/Fatigue.svelte';
import Header from '$lib/c/Header.svelte'
import Tip from '$lib/c/Tip.svelte';
  import type { Data } from '$lib/data/character'
  
  export let character:Data = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Spiral Flare Kick">
  <div slot='header' class='buttons'>
    {#if character}
      <Fatigue bind:character={character} />
    {/if}
    <slot />
  </div>
  <p><em>Spin skyward on jets of flame as you lash out with your letgs.</em></p>
  <ul>
    <li>Mark 1 <Tip text='fatigue'/></li>
  </ul>
  <p>Target 1 group or 2 individual foes:</p>
  <table>
    <tr>
      <th>1 group</th>
      <th>2 individuals</th>
    </tr>
    <tr>
      <td>Must mark 4 fatigue or 2 <Tip text='conditions'/>, their choice</td>
      <td>Must each mark 2 fatigue or 1 condition, their choice.</td>
    </tr>
  </table>
</Header>