<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '$lib/c/Tip.svelte'
import Waterbending from './Waterbending.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Training Style'>
  <Waterbending start={start+1} hide/>
  <Header h={2} {start} title='Earthbending'>
    // TODO finish training styles
    <Header h={3} {start} title='Fighting Styles' hide>
    
    </Header>
  </Header>
  <Header h={2} {start} title='Firebending'>
    <Header h={3} {start} title='Fighting Styles' hide>
    
    </Header>
  </Header>
  <Header h={2} {start} title='Airbending'>
    <Header h={3} {start} title='Fighting Styles' hide>
    
    </Header>
  </Header>
  <Header h={2} {start} title='Weapons'>
    <Header h={3} {start} title='Fighting Styles' hide>
    
    </Header>
  </Header>
  <Header h={2} {start} title='Technology'>
    <Header h={3} {start} title='Fighting Styles' hide>
    
    </Header>
  </Header>
</Header>