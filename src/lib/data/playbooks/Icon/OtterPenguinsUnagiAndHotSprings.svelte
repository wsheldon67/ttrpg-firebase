<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Tip from '$lib/c/Tip.svelte';
  import FullResult from '$lib/c/FullResult.svelte';
  import Fatigue from '$lib/c/Fatigue.svelte';
  import Growth from '$lib/c/Growth.svelte';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title='Otter-Penguins, Unagi, and Hot Springs'>
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
      <Fatigue bind:character={character} amt={-1}/>
      <Growth bind:character={character} />
    {/if}
    <slot />
  </div>
  <p>When you visit a new inhabited location you might know about, roll <Tip text='Harmony'/>:</p>
  <FullResult>
    <tr>
      <td>The place is different than you expected</td>
      <td>Ask 1 question</td>
      <td>Ask 2 questions</td>
    </tr>
    <tr>
      <td></td>
      <td rowspan="2">PCs who interact with one of the answers clear 1 <Tip text='fatigue'/> or mark growth.</td>
    </tr>
  </FullResult>
  <p>Questions:</p>
  <ul>
    <li>What's the best local pastime?</li>
    <li>What interesting locations are nearby?</li>
    <li>Who is the most famous person here?</li>
    <li>What special tradition is prized by locals?</li>
    <li>What's the most interesting legend locals recount about this place?</li>
  </ul>
</Header>