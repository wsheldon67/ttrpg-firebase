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
<Header h={1} {start} {hide} title="Out of Uniform">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>Put on a disguised or physically altered persona to foll a community into thinking you're two different people. Roll Creativity:</p>
  <FullResult>
    <tr>
      <td rowspan="2">Someone misidentifies you in a way that causes more trouble for you.</td>
      <td colspan="2">People mostly unfamiliar with you won't connect your two personas.</td>
    </tr>
    <tr>
      <td>This is the last time you can pull this trick without them catching on.</td>
      <td>-</td>
    </tr>
  </FullResult>
</Header>