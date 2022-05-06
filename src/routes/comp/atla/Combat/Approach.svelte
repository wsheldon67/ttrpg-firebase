<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
import AdvanceAndAttack from './AdvanceAndAttack.svelte'
import DefendAndManeuver from './DefendAndManeuver.svelte'
import EvadeAndObserve from './EvadeAndObserve.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Approaches'>
  <p>Determines what <Tip text='techniques'/> are availabe to a character during an exchange.</p>
  <DefendAndManeuver start={start+1} hide/>
  <AdvanceAndAttack start={start+1} hide/>
  <EvadeAndObserve start={start+1} hide/>
</Header>