<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
import Initiative from './Initiative.svelte'
import Surprise from './Surprise.svelte'

  export let start: number = 1
  export let show: boolean = true
</script>
<Header h={1} {start} {show} title='Starting Combat'>
  <Surprise start={start+1} />
  <Initiative start={start+1} />
  <Header h={2} {start} {show} title='Turns'>
    <p>Creatures take their turns during a round.</p>
    <p>See <a href='/comp/5e/Combat/Turn'>turns</a> for the things a creature can do on its turn.</p>
  </Header>
</Header>