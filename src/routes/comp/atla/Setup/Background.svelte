<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Background'>
  // TODO finish backgrounds
  <Header h={2} {start} title='Military' hide>
    
  </Header>
  <Header h={2} {start} title='Monastic' hide>
    
  </Header>
  <Header h={2} {start} title='Outlaw' hide>
    
  </Header>
  <Header h={2} {start} title='Privileged' hide>
    
  </Header>
  <Header h={2} {start} title='Urban' hide>
    
  </Header>
  <Header h={2} {start} title='Wilderness' hide>
    
  </Header>
</Header>