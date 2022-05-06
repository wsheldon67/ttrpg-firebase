<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
import Ready from './Ready.svelte'
import Retaliate from './Retaliate.svelte'
import SeizeAPosition from './SeizeAPosition.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1
</script>
<Header h={1} {start} {hide} title='Defend and Maneuver'>
  <Ready start={low} hide/>
  <Retaliate start={low} hide/>
  <SeizeAPosition start={low} hide/>
</Header>