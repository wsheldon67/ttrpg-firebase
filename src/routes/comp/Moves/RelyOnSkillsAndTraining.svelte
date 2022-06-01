<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import StatRoll from '$lib/c/StatRoll.svelte';
  import Tip from '$lib/c/Tip.svelte'
  import ResultTable from '$lib/c/ResultTable.svelte'
  import type { Data } from '$lib/data/character';
  import type { Move } from '$lib/data/playbooks/moves';

  export let start: number = 1
  export let hide: boolean = false
  export let character:Data = undefined
  export let move:Move = undefined
</script>
<Header h={1} {start} {hide} title="Rely on Your Skills and Training">
  <div slot='header' class='buttons'>
    {#if character && move}
      <StatRoll {character} {move} />
    {/if}
  </div>
  <Header h={2} {start} title='Examples' hide>
    <p>Any time you use your expertise and knowledge to overcome a significant complication or risk:</p>
    <ul>
      <li>Using survival skills to pacify an angry creature</li>
      <li>Invoking courtly etiquette to blend into a nobel's party</li>
      <li>Creating handholds in a stone wall to infiltrate a compound</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Roll Focus'>
    <ResultTable>
      <td>Succeed imperfectly. Accept complications or mark 1 <Tip text='fatigue'/>.</td>
      <td>Succeed perfectly.</td>
    </ResultTable>
  </Header>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Determined primarily by your <Tip text='training'/> and <Tip text='backgrounds'/>.</li>
      <li>When you choose to mark fatigue, describe how your character overcomes the complications.</li>
    </ul>
  </Header>
</Header>