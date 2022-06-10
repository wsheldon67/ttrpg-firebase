<script lang='ts'>
  import FullResult from '$lib/c/FullResult.svelte'
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '../moves'
  
  export let character:Data = undefined
  export let move:Move = undefined
  
  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title="Around Here Somewhere">
  <div slot='header' class='buttons'>
    {#if character}
      <StatRoll {character} {move} />
    {/if}
    <slot />
  </div>
  <p>Look for help from an old friend in the area who you haven't seen recently. Name them and roll Harmony:</p>
  <FullResult>
    <tr>
      <td rowspan="2">Your old enemies were looking for you too; the GM will tell you how you know they are near.</td>
      <td colspan="2">You find them and they can assist you.</td>
    </tr>
    <tr>
      <td>Choose 1 option</td>
      <td>Take both options</td>
    </tr>
  </FullResult>
  <p>Options</p>
  <ul>
    <li>They aren't caught up in their own problems.</li>
    <li>You don't owe them a favor or apology.</li>
  </ul>
</Header>