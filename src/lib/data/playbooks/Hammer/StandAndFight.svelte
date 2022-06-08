<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import StatRoll from '$lib/c/StatRoll.svelte';
import Status from '$lib/c/Status.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title='Stand and Fight!'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
      <Status bind:character={character} status='Prepared' />
    {/if}
    <slot />
  </div>
  <p>When you provoke an NPC opponent into attack you, roll with <Tip text='Passion'/>.</p>
  <FullResult>
    <tr>
      <td>They take advantage of your provocation to strike a blow where you least expect it.</td>
      <td>They're coming at you specifically.</td>
      <td>You're ready for them; clear a <Tip text='condition'/> or become <Tip text='Prepared'/>.</td>
    </tr>
  </FullResult>
</Header>