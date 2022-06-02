<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import Fatigue from '$lib/c/Fatigue.svelte'
  import FullResult from '$lib/c/FullResult.svelte';
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Whatever I Can">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>Spend time talking to the locals about their problems. Roll Harmony:</p>
  <FullResult>
    <tr>
      <td>Create a whole new problem with your questions and ideas</td>
      <td>Hear about the most significant and serious problem at hand</td>
      <td>Ask a follow up question about the problem or cause, take +1 <Tip text='ongoing'/> when you act on the answer.</td>
    </tr>
  </FullResult>
</Header>