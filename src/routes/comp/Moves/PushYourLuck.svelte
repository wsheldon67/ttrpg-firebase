<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
  import ResultTable from '$lib/c/ResultTable.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Push Your Luck'>
  <slot slot="header"/>
  <Header h={2} {start} title='Examples' hide>
    <p>Any time you rely on fate and luck to carry you through:</p>
    <ul>
      <li>Swimming through rapids</li>
      <li>Convincing someone you weren't stealing after being caught</li>
      <li>Leaping to catch a priceless artifact before it shatters</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Roll Passion'>
    <ResultTable>
      <td>Succeed, but with a cost.</td>
      <td>Succeed, with a cost and an opportunity.</td>
    </ResultTable>
  </Header>
  <Header h={2} {start} title='Rules'>
    <ul>
      <li>Applies when your <Tip text='skills and training'/> do not.</li>
      <li>There is always a cost for attempting to push your luck.</li>
    </ul>
  </Header>
</Header>