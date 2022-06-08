<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character'
  import type { Move } from '$lib/data/playbooks/moves'
  import StatRoll from '$lib/c/StatRoll.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import Fatigue from '$lib/c/Fatigue.svelte'
  import FullResult from '$lib/c/FullResult.svelte'
  
  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Challenge">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
      <Fatigue bind:character={character} amt={-5} />
    {/if}
    <slot />
  </div>
  <p>Throw a boastful challenge at an opponent before a fight. Roll Passion:</p>
  <FullResult>
    <tr>
      <td rowspan="2">They dismiss your challenge and refuse to fight; mark 1 <Tip text='condition'/></td>
      <td colspan="2">They may choose 1 extra technique in every <Tip text='exchange'/>. If you win the fight, choose 1 option.</td>
    </tr>
    <tr>
      <td></td>
      <td>If you win, clear all <Tip text='fatigue'/></td>
    </tr>
  </FullResult>
  <p>Options: Your opponent must...</p>
  <ul>
    <li>Teach you a technique of theirs or help you master one you already know</li>
    <li>Give you answers or an item of your choice</li>
    <li>Acknowledge your superiority; <Tip text='Shift your balance'/> twice towards Excellence</li>
    <li>Take your side in a future conflict</li>
  </ul>
</Header>