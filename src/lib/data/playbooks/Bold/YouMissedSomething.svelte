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
<Header h={1} {start} {hide} title='You Missed Something'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <p>Evaluate a friendly NPC's plan. Roll with <Tip text='Focus'/>:</p>
  <FullResult>
    <tr>
      <td>The GM tells you what obvious danger the NPC is ignoring or what they're hiding about their intent.</td>
      <td>The problems are fairly serious, the NPC will be resistant to making changes.</td>
      <td>Drastically improve the chances of success.</td>
    </tr>
  </FullResult>
</Header>