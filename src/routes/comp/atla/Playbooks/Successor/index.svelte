<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../_Tip.svelte'
  import StartingStats from '../_StartingStats.svelte'
  import Blurb from './Blurb.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title=''>
  <Blurb />
  <Header h={2} {start} title='Principles'>
    <Tip text=''/>
      vs
    <Tip text=''/>
  </Header>
  <StartingStats {start} stats={[]}/>
  <Header h={2} {start} title='Demeanor Options'>
    <ul class='list'>
      <li></li>
    </ul>
  </Header>
  <Header h={2} {start} title='Moves'>
    
  </Header>
</Header>