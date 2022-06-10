<script lang='ts'>
  import Bonus from '$lib/c/Bonus.svelte';
import Header from '$lib/c/Header.svelte'
import StatRoll from '$lib/c/StatRoll.svelte'
import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character'
import type { Move } from '../moves'
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="A Life of Regret">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
      <Bonus bind:character={character}
        name='+1 ongoing to attempts to take action to make amends' 
        source='A Life of Regret'
        label='+1 ongoing'
      />
    {/if}
    <slot />
  </div>
  <p><Tip text='Guide and comfort'/> an NPC by apologizing and honestly promising to make amends for the harm they have suffered.</p>
  <ul>
    <li>Roll with Focus instead of Harmony.</li>
  </ul>
  <table>
    <tr>
      <th>They open up</th>
      <th>They don't open up</th>
    </tr>
    <tr>
      <td>Take +1 <Tip text='ongoing'/> to attempts to take action to make amends.</td>
      <td>You <strong>do not</strong> take +1 <Tip text='forward'/> against them.</td>
    </tr>
  </table>
</Header>