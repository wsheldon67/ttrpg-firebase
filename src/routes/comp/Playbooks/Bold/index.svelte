<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '../../_Tip.svelte'
  import BestFriend from './BestFriend.svelte'
  import HeresThePlan from './HeresThePlan.svelte'
  import NotDoneYet from './NotDoneYet.svelte'
  import YouMissedSomething from './YouMissedSomething.svelte'
  import StraightShooter from './StraightShooter.svelte'
  import Playbook from '../_Playbook.svelte'
  import { Bold } from '$lib/data/playbooks/Bold'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Bold}>
  <Header h={2} {start} title='Moves' hide>
    <BestFriend start={start+2} hide/>
    <HeresThePlan start={start+2} hide/>
    <NotDoneYet start={start+2} hide/>
    <YouMissedSomething start={start+2} hide/>
    <StraightShooter start={start+2} hide/>
  </Header>
</Playbook>