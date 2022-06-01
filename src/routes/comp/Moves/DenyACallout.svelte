<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import PrincipleRoll from '$lib/c/PrincipleRoll.svelte';
  import Tip from '$lib/c/Tip.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Deny a Callout">
  <div slot='header' class='buttons'>
    {#if character && move}
      <PrincipleRoll {character} {move} />
    {/if}
  </div>
  <p>Deny a call to <Tip text='live up to your principle'/>.</p>
  <p>Roll with that <Tip text='principle'/>:</p>
  <FullResult>
    <tr>
      <td rowspan="2">Clear 1 <Tip text='fatigue'/>, clear a <Tip text='condition'/>, or <Tip text='shift your balance'/>.</td>
      <td colspan="2">Act as they say, or take 1 fatigue</td>
    </tr>
    <tr>
      <td style='width: 3em;'>-</td>
      <td>Also, shift your balance towards the principle</td>
    </tr>
  </FullResult>
</Header>
<style>
  td {
    text-align: center;
  }
</style>