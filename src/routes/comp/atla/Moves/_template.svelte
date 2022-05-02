<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
  import ResultTable from './_ResultTable.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Plead'>
  <Header h={2} {start} title='Examples' hide>
  
  </Header>
  <Header h={2} {start} title=''>
    <ResultTable>

    </ResultTable>
  </Header>
  <Header h={2} {start} title='Rules'>
  
  </Header>
</Header>