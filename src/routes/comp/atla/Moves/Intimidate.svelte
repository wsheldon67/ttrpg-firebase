<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import ResultTable from './_ResultTable.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Intimidate'>
  <Header h={2} {start} hide title='Examples'>
    <p>Any time you threaten an NPC into retreat or surrender, verbally or otherwise:</p>
    <ul>
      <li>Demanding surrender from a leader at spearpoint after taking out their minions</li>
      <li>Using your family's dangerous reputation to pressure a smuggler into giving you a stolen item</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Roll Passion'>
    <ResultTable>
      <td>The target chooses one option</td>
      <td>You eliminate one option before the target chooses</td>
    </ResultTable>
    <p>Target's Options:</p>
    <ul>
      <li>Run to escape or get backup</li>
      <li>Back down but keep watch</li>
      <li>Give in with a few stipulations</li>
      <li>Attack you, but <Tip text='off-balance'/>.</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Can only be used on NPCs</li>
    </ul>
  </Header>
</Header>