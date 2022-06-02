<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import FullResult from '$lib/c/FullResult.svelte';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Your Rules Stink">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>Stand up to an adult by telling them their rules are stupid. Roll Passion:</p>
  <FullResult>
    <tr>
      <td>They are unmoved, mark a <Tip text='condition'/></td>
      <td>They are surprised by argument; they shift their balance or offer you a way forward</td>
      <td>They are surprised by argument; they shift their balance <strong>and</strong> offer you a way forward</td>
    </tr>
  </FullResult>
</Header>