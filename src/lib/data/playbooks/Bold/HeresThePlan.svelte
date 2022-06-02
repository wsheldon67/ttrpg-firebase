<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '../moves';
  import StatRoll from '$lib/c/StatRoll.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Here's The Plan">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>You commit to a plan you've proposed to the group:</p>
  <ul>
    <li>Roll with <Tip text='Creativity'/></li>
    <li>Take -1 for each of your companions who isn't on board</li>
  </ul>
  <FullResult>
    <tr>
      <td><Tip text='hold'/> 1; Your plan goes awry when you encounter surprising opposition.</td>
      <td>Hold 1</td>
      <td>Hold 2</td>
    </tr>
    <p>Spend your hold while the plan is being carried out to overcome or evade an obstacle, create an advantage, or neutralize a danger.</p>
    <ul><li>If any companion abandons you, mark a <Tip text='condition'/></li></ul>
  </FullResult>
</Header>