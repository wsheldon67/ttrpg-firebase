<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Tip from '$lib/c/Tip.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import ResultTable from '$lib/c/ResultTable.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Plead">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <Header h={2} {start} title='Examples' hide>
    <p>Any time you try to get help or a favor from a reluctant NPC:</p>
    <ul>
      <li>Begging a friendly innkeeper to hide you from danger</li>
      <li>Asking a prisoner you've freed to stay and help instead of escaping</li>
      <li>Asking a mentor to teach you a technique they don't think you're ready to learn</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Roll Harmony'>
    <ResultTable>
      <td>Target acts, but needs some <Tooltip tip='Besides verbal reassurances, could be conditions that must be fulfilled before the NPC will act.'>convincing</Tooltip></td>
      <td>Target acts now</td>
    </ResultTable>
  </Header>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>The target must care what you think - you have established a relationship or made a good impression.</li>
      <li>As opposed to <Tip text='guiding and comforting'/>, pleading is an attempt for immediate action.</li>
    </ul>
  </Header>
</Header>