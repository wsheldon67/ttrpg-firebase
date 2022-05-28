<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '../../_Tip.svelte'
  import StartingStats from '../_StartingStats.svelte'
  import Blurb from './Blurb.svelte'
  import BestFriend from './BestFriend.svelte'
  import HeresThePlan from './HeresThePlan.svelte'
  import NotDoneYet from './NotDoneYet.svelte'
  import YouMissedSomething from './YouMissedSomething.svelte'
import StraightShooter from './StraightShooter.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Bold'>
  <Blurb />
  <Header h={2} {start} title='Principles'>
    <Tooltip tip="Committed to others, and in turn, subordinate to others, putting the needs of their friends and companions far ahead of their own goals and feelings.">Loyalty</Tooltip> vs <Tooltip tip="Belief in themselves, their own abilities, and their own status. Takes action decisively, demands the respect due them, and makes their own decisions independently of others.">Confidence</Tooltip>
  </Header>
  <StartingStats {start} stats={[1,1,0,-1]} />
  <Header h={2} {start} title='Demeanor Options' hide>
    <ul class='list'>
      <li>Impatient</li>
      <li>Sensitive</li>
      <li>Affable</li>
      <li>Enthusiastic</li>
      <li>Talkative</li>
      <li>Impetuous</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Moves' hide>
    <BestFriend start={start+2} hide/>
    <HeresThePlan start={start+2} hide/>
    <NotDoneYet start={start+2} hide/>
    <YouMissedSomething start={start+2} hide/>
    <StraightShooter start={start+2} hide/>
  </Header>
</Header>