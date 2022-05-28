<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '../../_Tip.svelte'
import StartingStats from '../_StartingStats.svelte'
import Blurb from './Blurb.svelte'
import DrivenByJustice from './DrivenByJustice.svelte'
import IDontHateYou from './IDontHateYou.svelte'
import NoTimeForFeelings from './NoTimeForFeelings.svelte'
import TakesOneToKnowOne from './TakesOneToKnowOne.svelte'
import ThisWasAVictory from './ThisWasAVictory.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Adamant'>
  <Blurb />
  <Header h={2} {start} title='Principles'>
    <p><Tooltip tip="">Restraint</Tooltip> vs <Tooltip tip="">Results</Tooltip></p>
  </Header>
  <StartingStats {start} stats={[0,1,-1,1]}/>
  <Header h={2} {start} title='Demeanor Options' hide>
    <ul class='list'>
      <li>Above-it-all</li>
      <li>Perfectionist</li>
      <li>Chilly</li>
      <li>Rebellious</li>
      <li>Flippant</li>
      <li>Standoffish</li>
    </ul>
  </Header>
  <Header h={2} {start} title='The Lodestar' hide>
    <p>The one person you listen to who can rein you in; often the only person you let past your emotional walls.</p>
    <ul>
      <li>Cannot resist your lodestar when they <Tip text='shift your balance'/> or <Tip text='call you out'/></li>
      <li>//TODO finish lodestar</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Moves' hide>
    <ThisWasAVictory start={start+2} hide/>
    <TakesOneToKnowOne start={start+2} hide/>
    <NoTimeForFeelings start={start+2} hide/>
    <IDontHateYou start={start+2} hide/>
    <DrivenByJustice start={start+2} hide/>
  </Header>
</Header>