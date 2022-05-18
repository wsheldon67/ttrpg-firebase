<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../../../_Tip.svelte'
import AdvanceAndAttack from './AdvanceAndAttack.svelte'
import DefendAndManeuver from './DefendAndManeuver.svelte'
import EvadeAndObserve from './EvadeAndObserve.svelte'

  export let start: number = 1
  export let hide: boolean = false
  let low = start+1
</script>
<Header h={1} {start} {hide} title='Basic Techniques'>
  <p>Techniques that any player can use.</p>
  <DefendAndManeuver start={low} />
  <AdvanceAndAttack start={low} />
  <EvadeAndObserve start={low} />
</Header>